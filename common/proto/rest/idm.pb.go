// Code generated by protoc-gen-go. DO NOT EDIT.
// source: idm.proto

package rest

import proto "github.com/golang/protobuf/proto"
import fmt "fmt"
import math "math"
import idm "github.com/pydio/cells/common/proto/idm"
import service "github.com/pydio/cells/common/service/proto"

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

type ResourcePolicyQuery_QueryType int32

const (
	ResourcePolicyQuery_CONTEXT ResourcePolicyQuery_QueryType = 0
	ResourcePolicyQuery_ANY     ResourcePolicyQuery_QueryType = 1
	ResourcePolicyQuery_NONE    ResourcePolicyQuery_QueryType = 2
	ResourcePolicyQuery_USER    ResourcePolicyQuery_QueryType = 3
)

var ResourcePolicyQuery_QueryType_name = map[int32]string{
	0: "CONTEXT",
	1: "ANY",
	2: "NONE",
	3: "USER",
}
var ResourcePolicyQuery_QueryType_value = map[string]int32{
	"CONTEXT": 0,
	"ANY":     1,
	"NONE":    2,
	"USER":    3,
}

func (x ResourcePolicyQuery_QueryType) String() string {
	return proto.EnumName(ResourcePolicyQuery_QueryType_name, int32(x))
}
func (ResourcePolicyQuery_QueryType) EnumDescriptor() ([]byte, []int) {
	return fileDescriptor6, []int{0, 0}
}

// Generic Query for limiting results based on resource permissions
type ResourcePolicyQuery struct {
	// The type can be CONTEXT, ANY, NODE or USER. This restricts the may filter out the result set based on their policies
	Type ResourcePolicyQuery_QueryType `protobuf:"varint,1,opt,name=Type,enum=rest.ResourcePolicyQuery_QueryType" json:"Type,omitempty"`
	// Limit to one given user ID
	UserId string `protobuf:"bytes,2,opt,name=UserId" json:"UserId,omitempty"`
}

func (m *ResourcePolicyQuery) Reset()                    { *m = ResourcePolicyQuery{} }
func (m *ResourcePolicyQuery) String() string            { return proto.CompactTextString(m) }
func (*ResourcePolicyQuery) ProtoMessage()               {}
func (*ResourcePolicyQuery) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{0} }

func (m *ResourcePolicyQuery) GetType() ResourcePolicyQuery_QueryType {
	if m != nil {
		return m.Type
	}
	return ResourcePolicyQuery_CONTEXT
}

func (m *ResourcePolicyQuery) GetUserId() string {
	if m != nil {
		return m.UserId
	}
	return ""
}

// Roles Search
type SearchRoleRequest struct {
	// List of atomic queries that will be combined using the Operation type (AND / OR)
	Queries []*idm.RoleSingleQuery `protobuf:"bytes,1,rep,name=Queries" json:"Queries,omitempty"`
	// Policies query for specifying the search context
	ResourcePolicyQuery *ResourcePolicyQuery `protobuf:"bytes,7,opt,name=ResourcePolicyQuery" json:"ResourcePolicyQuery,omitempty"`
	// Start listing at a given position
	Offset int64 `protobuf:"varint,2,opt,name=Offset" json:"Offset,omitempty"`
	// Limit number of results
	Limit int64 `protobuf:"varint,3,opt,name=Limit" json:"Limit,omitempty"`
	// Group results by
	GroupBy int32 `protobuf:"varint,4,opt,name=GroupBy" json:"GroupBy,omitempty"`
	// Return counts only, no actual results
	CountOnly bool `protobuf:"varint,5,opt,name=CountOnly" json:"CountOnly,omitempty"`
	// Combine Single Queries with AND or OR
	Operation service.OperationType `protobuf:"varint,6,opt,name=Operation,enum=service.OperationType" json:"Operation,omitempty"`
}

func (m *SearchRoleRequest) Reset()                    { *m = SearchRoleRequest{} }
func (m *SearchRoleRequest) String() string            { return proto.CompactTextString(m) }
func (*SearchRoleRequest) ProtoMessage()               {}
func (*SearchRoleRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{1} }

func (m *SearchRoleRequest) GetQueries() []*idm.RoleSingleQuery {
	if m != nil {
		return m.Queries
	}
	return nil
}

func (m *SearchRoleRequest) GetResourcePolicyQuery() *ResourcePolicyQuery {
	if m != nil {
		return m.ResourcePolicyQuery
	}
	return nil
}

func (m *SearchRoleRequest) GetOffset() int64 {
	if m != nil {
		return m.Offset
	}
	return 0
}

func (m *SearchRoleRequest) GetLimit() int64 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *SearchRoleRequest) GetGroupBy() int32 {
	if m != nil {
		return m.GroupBy
	}
	return 0
}

func (m *SearchRoleRequest) GetCountOnly() bool {
	if m != nil {
		return m.CountOnly
	}
	return false
}

func (m *SearchRoleRequest) GetOperation() service.OperationType {
	if m != nil {
		return m.Operation
	}
	return service.OperationType_OR
}

// Roles Collection
type RolesCollection struct {
	// List of Roles
	Roles []*idm.Role `protobuf:"bytes,1,rep,name=Roles" json:"Roles,omitempty"`
}

func (m *RolesCollection) Reset()                    { *m = RolesCollection{} }
func (m *RolesCollection) String() string            { return proto.CompactTextString(m) }
func (*RolesCollection) ProtoMessage()               {}
func (*RolesCollection) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{2} }

func (m *RolesCollection) GetRoles() []*idm.Role {
	if m != nil {
		return m.Roles
	}
	return nil
}

// Users Search
type SearchUserRequest struct {
	// Atomic queries that will be combined using the Operation Type (AND or OR)
	Queries []*idm.UserSingleQuery `protobuf:"bytes,1,rep,name=Queries" json:"Queries,omitempty"`
	// Policies queries to filter the search context
	ResourcePolicyQuery *ResourcePolicyQuery `protobuf:"bytes,7,opt,name=ResourcePolicyQuery" json:"ResourcePolicyQuery,omitempty"`
	// Start listing at a given position
	Offset int64 `protobuf:"varint,2,opt,name=Offset" json:"Offset,omitempty"`
	// Limit number of results
	Limit int64 `protobuf:"varint,3,opt,name=Limit" json:"Limit,omitempty"`
	// Group by ...
	GroupBy int32 `protobuf:"varint,4,opt,name=GroupBy" json:"GroupBy,omitempty"`
	// Return counts only, no actual results
	CountOnly bool `protobuf:"varint,5,opt,name=CountOnly" json:"CountOnly,omitempty"`
	// Combine single queries with AND or OR logic
	Operation service.OperationType `protobuf:"varint,6,opt,name=Operation,enum=service.OperationType" json:"Operation,omitempty"`
}

func (m *SearchUserRequest) Reset()                    { *m = SearchUserRequest{} }
func (m *SearchUserRequest) String() string            { return proto.CompactTextString(m) }
func (*SearchUserRequest) ProtoMessage()               {}
func (*SearchUserRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{3} }

func (m *SearchUserRequest) GetQueries() []*idm.UserSingleQuery {
	if m != nil {
		return m.Queries
	}
	return nil
}

func (m *SearchUserRequest) GetResourcePolicyQuery() *ResourcePolicyQuery {
	if m != nil {
		return m.ResourcePolicyQuery
	}
	return nil
}

func (m *SearchUserRequest) GetOffset() int64 {
	if m != nil {
		return m.Offset
	}
	return 0
}

func (m *SearchUserRequest) GetLimit() int64 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *SearchUserRequest) GetGroupBy() int32 {
	if m != nil {
		return m.GroupBy
	}
	return 0
}

func (m *SearchUserRequest) GetCountOnly() bool {
	if m != nil {
		return m.CountOnly
	}
	return false
}

func (m *SearchUserRequest) GetOperation() service.OperationType {
	if m != nil {
		return m.Operation
	}
	return service.OperationType_OR
}

// Users Collection
type UsersCollection struct {
	// List of Groups
	Groups []*idm.User `protobuf:"bytes,1,rep,name=Groups" json:"Groups,omitempty"`
	// List of Users
	Users []*idm.User `protobuf:"bytes,2,rep,name=Users" json:"Users,omitempty"`
	// Total number of results
	Total int32 `protobuf:"varint,3,opt,name=Total" json:"Total,omitempty"`
}

func (m *UsersCollection) Reset()                    { *m = UsersCollection{} }
func (m *UsersCollection) String() string            { return proto.CompactTextString(m) }
func (*UsersCollection) ProtoMessage()               {}
func (*UsersCollection) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{4} }

func (m *UsersCollection) GetGroups() []*idm.User {
	if m != nil {
		return m.Groups
	}
	return nil
}

func (m *UsersCollection) GetUsers() []*idm.User {
	if m != nil {
		return m.Users
	}
	return nil
}

func (m *UsersCollection) GetTotal() int32 {
	if m != nil {
		return m.Total
	}
	return 0
}

// Binding Response
type BindResponse struct {
	Success bool `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
}

func (m *BindResponse) Reset()                    { *m = BindResponse{} }
func (m *BindResponse) String() string            { return proto.CompactTextString(m) }
func (*BindResponse) ProtoMessage()               {}
func (*BindResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{5} }

func (m *BindResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

// Rest request for ACL's
type SearchACLRequest struct {
	// Atomic queries that will be combined using the OperationType (AND or OR)
	Queries []*idm.ACLSingleQuery `protobuf:"bytes,1,rep,name=Queries" json:"Queries,omitempty"`
	// Start listing at a given position
	Offset int64 `protobuf:"varint,2,opt,name=Offset" json:"Offset,omitempty"`
	// Limit the number of results
	Limit int64 `protobuf:"varint,3,opt,name=Limit" json:"Limit,omitempty"`
	// Group results
	GroupBy int32 `protobuf:"varint,4,opt,name=GroupBy" json:"GroupBy,omitempty"`
	// Return counts only, no actual results
	CountOnly bool `protobuf:"varint,5,opt,name=CountOnly" json:"CountOnly,omitempty"`
	// Single queries will be combined using this operation AND or OR logic
	Operation service.OperationType `protobuf:"varint,6,opt,name=Operation,enum=service.OperationType" json:"Operation,omitempty"`
}

func (m *SearchACLRequest) Reset()                    { *m = SearchACLRequest{} }
func (m *SearchACLRequest) String() string            { return proto.CompactTextString(m) }
func (*SearchACLRequest) ProtoMessage()               {}
func (*SearchACLRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{6} }

func (m *SearchACLRequest) GetQueries() []*idm.ACLSingleQuery {
	if m != nil {
		return m.Queries
	}
	return nil
}

func (m *SearchACLRequest) GetOffset() int64 {
	if m != nil {
		return m.Offset
	}
	return 0
}

func (m *SearchACLRequest) GetLimit() int64 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *SearchACLRequest) GetGroupBy() int32 {
	if m != nil {
		return m.GroupBy
	}
	return 0
}

func (m *SearchACLRequest) GetCountOnly() bool {
	if m != nil {
		return m.CountOnly
	}
	return false
}

func (m *SearchACLRequest) GetOperation() service.OperationType {
	if m != nil {
		return m.Operation
	}
	return service.OperationType_OR
}

// Response for search request
type ACLCollection struct {
	// List of ACLs
	ACLs []*idm.ACL `protobuf:"bytes,1,rep,name=ACLs" json:"ACLs,omitempty"`
	// Total number of results
	Total int32 `protobuf:"varint,2,opt,name=Total" json:"Total,omitempty"`
}

func (m *ACLCollection) Reset()                    { *m = ACLCollection{} }
func (m *ACLCollection) String() string            { return proto.CompactTextString(m) }
func (*ACLCollection) ProtoMessage()               {}
func (*ACLCollection) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{7} }

func (m *ACLCollection) GetACLs() []*idm.ACL {
	if m != nil {
		return m.ACLs
	}
	return nil
}

func (m *ACLCollection) GetTotal() int32 {
	if m != nil {
		return m.Total
	}
	return 0
}

// Rest request for searching workspaces
type SearchWorkspaceRequest struct {
	// Atomic queries that will be combined using the OperationType (AND or OR)
	Queries []*idm.WorkspaceSingleQuery `protobuf:"bytes,1,rep,name=Queries" json:"Queries,omitempty"`
	// Policies queries to filter the search context
	ResourcePolicyQuery *ResourcePolicyQuery `protobuf:"bytes,7,opt,name=ResourcePolicyQuery" json:"ResourcePolicyQuery,omitempty"`
	// Start listing at a given position
	Offset int64 `protobuf:"varint,2,opt,name=Offset" json:"Offset,omitempty"`
	// Limit the number of results
	Limit int64 `protobuf:"varint,3,opt,name=Limit" json:"Limit,omitempty"`
	// Group results
	GroupBy int32 `protobuf:"varint,4,opt,name=GroupBy" json:"GroupBy,omitempty"`
	// Return counts only, no actual results
	CountOnly bool `protobuf:"varint,5,opt,name=CountOnly" json:"CountOnly,omitempty"`
	// Single queries will be combined using this operation AND or OR logic
	Operation service.OperationType `protobuf:"varint,6,opt,name=Operation,enum=service.OperationType" json:"Operation,omitempty"`
}

func (m *SearchWorkspaceRequest) Reset()                    { *m = SearchWorkspaceRequest{} }
func (m *SearchWorkspaceRequest) String() string            { return proto.CompactTextString(m) }
func (*SearchWorkspaceRequest) ProtoMessage()               {}
func (*SearchWorkspaceRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{8} }

func (m *SearchWorkspaceRequest) GetQueries() []*idm.WorkspaceSingleQuery {
	if m != nil {
		return m.Queries
	}
	return nil
}

func (m *SearchWorkspaceRequest) GetResourcePolicyQuery() *ResourcePolicyQuery {
	if m != nil {
		return m.ResourcePolicyQuery
	}
	return nil
}

func (m *SearchWorkspaceRequest) GetOffset() int64 {
	if m != nil {
		return m.Offset
	}
	return 0
}

func (m *SearchWorkspaceRequest) GetLimit() int64 {
	if m != nil {
		return m.Limit
	}
	return 0
}

func (m *SearchWorkspaceRequest) GetGroupBy() int32 {
	if m != nil {
		return m.GroupBy
	}
	return 0
}

func (m *SearchWorkspaceRequest) GetCountOnly() bool {
	if m != nil {
		return m.CountOnly
	}
	return false
}

func (m *SearchWorkspaceRequest) GetOperation() service.OperationType {
	if m != nil {
		return m.Operation
	}
	return service.OperationType_OR
}

// Rest response for workspace search
type WorkspaceCollection struct {
	// List of workspaces
	Workspaces []*idm.Workspace `protobuf:"bytes,1,rep,name=Workspaces" json:"Workspaces,omitempty"`
	// Total number of results
	Total int32 `protobuf:"varint,2,opt,name=Total" json:"Total,omitempty"`
}

func (m *WorkspaceCollection) Reset()                    { *m = WorkspaceCollection{} }
func (m *WorkspaceCollection) String() string            { return proto.CompactTextString(m) }
func (*WorkspaceCollection) ProtoMessage()               {}
func (*WorkspaceCollection) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{9} }

func (m *WorkspaceCollection) GetWorkspaces() []*idm.Workspace {
	if m != nil {
		return m.Workspaces
	}
	return nil
}

func (m *WorkspaceCollection) GetTotal() int32 {
	if m != nil {
		return m.Total
	}
	return 0
}

// Collection of UserMeta
type UserMetaCollection struct {
	Metadatas []*idm.UserMeta `protobuf:"bytes,1,rep,name=Metadatas" json:"Metadatas,omitempty"`
}

func (m *UserMetaCollection) Reset()                    { *m = UserMetaCollection{} }
func (m *UserMetaCollection) String() string            { return proto.CompactTextString(m) }
func (*UserMetaCollection) ProtoMessage()               {}
func (*UserMetaCollection) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{10} }

func (m *UserMetaCollection) GetMetadatas() []*idm.UserMeta {
	if m != nil {
		return m.Metadatas
	}
	return nil
}

// Collection of Meta Namespaces
type UserMetaNamespaceCollection struct {
	// List of user meta Namespaces
	Namespaces []*idm.UserMetaNamespace `protobuf:"bytes,1,rep,name=Namespaces" json:"Namespaces,omitempty"`
}

func (m *UserMetaNamespaceCollection) Reset()                    { *m = UserMetaNamespaceCollection{} }
func (m *UserMetaNamespaceCollection) String() string            { return proto.CompactTextString(m) }
func (*UserMetaNamespaceCollection) ProtoMessage()               {}
func (*UserMetaNamespaceCollection) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{11} }

func (m *UserMetaNamespaceCollection) GetNamespaces() []*idm.UserMetaNamespace {
	if m != nil {
		return m.Namespaces
	}
	return nil
}

type ListUserMetaTagsRequest struct {
	// List user meta tags for this namespace
	Namespace string `protobuf:"bytes,1,opt,name=Namespace" json:"Namespace,omitempty"`
}

func (m *ListUserMetaTagsRequest) Reset()                    { *m = ListUserMetaTagsRequest{} }
func (m *ListUserMetaTagsRequest) String() string            { return proto.CompactTextString(m) }
func (*ListUserMetaTagsRequest) ProtoMessage()               {}
func (*ListUserMetaTagsRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{12} }

func (m *ListUserMetaTagsRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

type ListUserMetaTagsResponse struct {
	// List of existing tags values
	Tags []string `protobuf:"bytes,1,rep,name=Tags" json:"Tags,omitempty"`
}

func (m *ListUserMetaTagsResponse) Reset()                    { *m = ListUserMetaTagsResponse{} }
func (m *ListUserMetaTagsResponse) String() string            { return proto.CompactTextString(m) }
func (*ListUserMetaTagsResponse) ProtoMessage()               {}
func (*ListUserMetaTagsResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{13} }

func (m *ListUserMetaTagsResponse) GetTags() []string {
	if m != nil {
		return m.Tags
	}
	return nil
}

type PutUserMetaTagRequest struct {
	// Add a tag value for this namespace
	Namespace string `protobuf:"bytes,1,opt,name=Namespace" json:"Namespace,omitempty"`
	// New tag value
	Tag string `protobuf:"bytes,2,opt,name=Tag" json:"Tag,omitempty"`
}

func (m *PutUserMetaTagRequest) Reset()                    { *m = PutUserMetaTagRequest{} }
func (m *PutUserMetaTagRequest) String() string            { return proto.CompactTextString(m) }
func (*PutUserMetaTagRequest) ProtoMessage()               {}
func (*PutUserMetaTagRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{14} }

func (m *PutUserMetaTagRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *PutUserMetaTagRequest) GetTag() string {
	if m != nil {
		return m.Tag
	}
	return ""
}

type PutUserMetaTagResponse struct {
	// Operation success
	Success bool `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
}

func (m *PutUserMetaTagResponse) Reset()                    { *m = PutUserMetaTagResponse{} }
func (m *PutUserMetaTagResponse) String() string            { return proto.CompactTextString(m) }
func (*PutUserMetaTagResponse) ProtoMessage()               {}
func (*PutUserMetaTagResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{15} }

func (m *PutUserMetaTagResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

type DeleteUserMetaTagsRequest struct {
	// Delete tags from this namespace
	Namespace string `protobuf:"bytes,1,opt,name=Namespace" json:"Namespace,omitempty"`
	// Delete this tag
	Tags string `protobuf:"bytes,2,opt,name=Tags" json:"Tags,omitempty"`
}

func (m *DeleteUserMetaTagsRequest) Reset()                    { *m = DeleteUserMetaTagsRequest{} }
func (m *DeleteUserMetaTagsRequest) String() string            { return proto.CompactTextString(m) }
func (*DeleteUserMetaTagsRequest) ProtoMessage()               {}
func (*DeleteUserMetaTagsRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{16} }

func (m *DeleteUserMetaTagsRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *DeleteUserMetaTagsRequest) GetTags() string {
	if m != nil {
		return m.Tags
	}
	return ""
}

type DeleteUserMetaTagsResponse struct {
	Success bool `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
}

func (m *DeleteUserMetaTagsResponse) Reset()                    { *m = DeleteUserMetaTagsResponse{} }
func (m *DeleteUserMetaTagsResponse) String() string            { return proto.CompactTextString(m) }
func (*DeleteUserMetaTagsResponse) ProtoMessage()               {}
func (*DeleteUserMetaTagsResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{17} }

func (m *DeleteUserMetaTagsResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

type UserBookmarksRequest struct {
}

func (m *UserBookmarksRequest) Reset()                    { *m = UserBookmarksRequest{} }
func (m *UserBookmarksRequest) String() string            { return proto.CompactTextString(m) }
func (*UserBookmarksRequest) ProtoMessage()               {}
func (*UserBookmarksRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{18} }

// Rest request for revocation. Token is not mandatory, if not set
// request will use current JWT token
type RevokeRequest struct {
	// Pass a specific Token ID to be revoked. If empty, request will use current JWT
	TokenId string `protobuf:"bytes,1,opt,name=TokenId" json:"TokenId,omitempty"`
}

func (m *RevokeRequest) Reset()                    { *m = RevokeRequest{} }
func (m *RevokeRequest) String() string            { return proto.CompactTextString(m) }
func (*RevokeRequest) ProtoMessage()               {}
func (*RevokeRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{19} }

func (m *RevokeRequest) GetTokenId() string {
	if m != nil {
		return m.TokenId
	}
	return ""
}

// Rest response
type RevokeResponse struct {
	Success bool   `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=Message" json:"Message,omitempty"`
}

func (m *RevokeResponse) Reset()                    { *m = RevokeResponse{} }
func (m *RevokeResponse) String() string            { return proto.CompactTextString(m) }
func (*RevokeResponse) ProtoMessage()               {}
func (*RevokeResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{20} }

func (m *RevokeResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *RevokeResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

type ResetPasswordTokenRequest struct {
	// Start a ResetPassword workflow for this user
	UserLogin string `protobuf:"bytes,1,opt,name=UserLogin" json:"UserLogin,omitempty"`
}

func (m *ResetPasswordTokenRequest) Reset()                    { *m = ResetPasswordTokenRequest{} }
func (m *ResetPasswordTokenRequest) String() string            { return proto.CompactTextString(m) }
func (*ResetPasswordTokenRequest) ProtoMessage()               {}
func (*ResetPasswordTokenRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{21} }

func (m *ResetPasswordTokenRequest) GetUserLogin() string {
	if m != nil {
		return m.UserLogin
	}
	return ""
}

type ResetPasswordTokenResponse struct {
	Success bool   `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=Message" json:"Message,omitempty"`
}

func (m *ResetPasswordTokenResponse) Reset()                    { *m = ResetPasswordTokenResponse{} }
func (m *ResetPasswordTokenResponse) String() string            { return proto.CompactTextString(m) }
func (*ResetPasswordTokenResponse) ProtoMessage()               {}
func (*ResetPasswordTokenResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{22} }

func (m *ResetPasswordTokenResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *ResetPasswordTokenResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

type ResetPasswordRequest struct {
	// Token generated by the previous step of the reset password workflow
	ResetPasswordToken string `protobuf:"bytes,1,opt,name=ResetPasswordToken" json:"ResetPasswordToken,omitempty"`
	// User Login
	UserLogin string `protobuf:"bytes,2,opt,name=UserLogin" json:"UserLogin,omitempty"`
	// New password to be stored for this user
	NewPassword string `protobuf:"bytes,3,opt,name=NewPassword" json:"NewPassword,omitempty"`
}

func (m *ResetPasswordRequest) Reset()                    { *m = ResetPasswordRequest{} }
func (m *ResetPasswordRequest) String() string            { return proto.CompactTextString(m) }
func (*ResetPasswordRequest) ProtoMessage()               {}
func (*ResetPasswordRequest) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{23} }

func (m *ResetPasswordRequest) GetResetPasswordToken() string {
	if m != nil {
		return m.ResetPasswordToken
	}
	return ""
}

func (m *ResetPasswordRequest) GetUserLogin() string {
	if m != nil {
		return m.UserLogin
	}
	return ""
}

func (m *ResetPasswordRequest) GetNewPassword() string {
	if m != nil {
		return m.NewPassword
	}
	return ""
}

type ResetPasswordResponse struct {
	Success bool   `protobuf:"varint,1,opt,name=Success" json:"Success,omitempty"`
	Message string `protobuf:"bytes,2,opt,name=Message" json:"Message,omitempty"`
}

func (m *ResetPasswordResponse) Reset()                    { *m = ResetPasswordResponse{} }
func (m *ResetPasswordResponse) String() string            { return proto.CompactTextString(m) }
func (*ResetPasswordResponse) ProtoMessage()               {}
func (*ResetPasswordResponse) Descriptor() ([]byte, []int) { return fileDescriptor6, []int{24} }

func (m *ResetPasswordResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *ResetPasswordResponse) GetMessage() string {
	if m != nil {
		return m.Message
	}
	return ""
}

func init() {
	proto.RegisterType((*ResourcePolicyQuery)(nil), "rest.ResourcePolicyQuery")
	proto.RegisterType((*SearchRoleRequest)(nil), "rest.SearchRoleRequest")
	proto.RegisterType((*RolesCollection)(nil), "rest.RolesCollection")
	proto.RegisterType((*SearchUserRequest)(nil), "rest.SearchUserRequest")
	proto.RegisterType((*UsersCollection)(nil), "rest.UsersCollection")
	proto.RegisterType((*BindResponse)(nil), "rest.BindResponse")
	proto.RegisterType((*SearchACLRequest)(nil), "rest.SearchACLRequest")
	proto.RegisterType((*ACLCollection)(nil), "rest.ACLCollection")
	proto.RegisterType((*SearchWorkspaceRequest)(nil), "rest.SearchWorkspaceRequest")
	proto.RegisterType((*WorkspaceCollection)(nil), "rest.WorkspaceCollection")
	proto.RegisterType((*UserMetaCollection)(nil), "rest.UserMetaCollection")
	proto.RegisterType((*UserMetaNamespaceCollection)(nil), "rest.UserMetaNamespaceCollection")
	proto.RegisterType((*ListUserMetaTagsRequest)(nil), "rest.ListUserMetaTagsRequest")
	proto.RegisterType((*ListUserMetaTagsResponse)(nil), "rest.ListUserMetaTagsResponse")
	proto.RegisterType((*PutUserMetaTagRequest)(nil), "rest.PutUserMetaTagRequest")
	proto.RegisterType((*PutUserMetaTagResponse)(nil), "rest.PutUserMetaTagResponse")
	proto.RegisterType((*DeleteUserMetaTagsRequest)(nil), "rest.DeleteUserMetaTagsRequest")
	proto.RegisterType((*DeleteUserMetaTagsResponse)(nil), "rest.DeleteUserMetaTagsResponse")
	proto.RegisterType((*UserBookmarksRequest)(nil), "rest.UserBookmarksRequest")
	proto.RegisterType((*RevokeRequest)(nil), "rest.RevokeRequest")
	proto.RegisterType((*RevokeResponse)(nil), "rest.RevokeResponse")
	proto.RegisterType((*ResetPasswordTokenRequest)(nil), "rest.ResetPasswordTokenRequest")
	proto.RegisterType((*ResetPasswordTokenResponse)(nil), "rest.ResetPasswordTokenResponse")
	proto.RegisterType((*ResetPasswordRequest)(nil), "rest.ResetPasswordRequest")
	proto.RegisterType((*ResetPasswordResponse)(nil), "rest.ResetPasswordResponse")
	proto.RegisterEnum("rest.ResourcePolicyQuery_QueryType", ResourcePolicyQuery_QueryType_name, ResourcePolicyQuery_QueryType_value)
}

func init() { proto.RegisterFile("idm.proto", fileDescriptor6) }

var fileDescriptor6 = []byte{
	// 855 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe4, 0x56, 0xdd, 0x72, 0xdb, 0x44,
	0x14, 0x46, 0xfe, 0x8d, 0x4e, 0x48, 0x6a, 0x36, 0xa9, 0x51, 0x42, 0x66, 0x30, 0xcb, 0x8d, 0x19,
	0x06, 0x79, 0x70, 0xa1, 0x85, 0x4b, 0x47, 0xcd, 0x74, 0x3a, 0x75, 0xec, 0xb0, 0x71, 0x06, 0x18,
	0xae, 0x54, 0xe9, 0xd4, 0xd5, 0x58, 0xd2, 0x1a, 0xad, 0xd4, 0x8e, 0x5f, 0x80, 0xb7, 0xe0, 0x0d,
	0xb8, 0xe6, 0x6d, 0x78, 0x17, 0x66, 0x57, 0x5a, 0x59, 0x76, 0x5d, 0xcc, 0xcf, 0x0d, 0x33, 0xbd,
	0xc9, 0xe8, 0x7c, 0xe7, 0x3b, 0x67, 0xbf, 0xf3, 0x1d, 0xaf, 0x14, 0x30, 0x03, 0x3f, 0xb2, 0x97,
	0x09, 0x4f, 0x39, 0x69, 0x24, 0x28, 0xd2, 0xf3, 0x2f, 0xe7, 0x41, 0xfa, 0x32, 0x7b, 0x6e, 0x7b,
	0x3c, 0x1a, 0x2c, 0x57, 0x7e, 0xc0, 0x07, 0x1e, 0x86, 0xa1, 0x18, 0x78, 0x3c, 0x8a, 0x78, 0x3c,
	0x50, 0xd4, 0x41, 0xe0, 0x47, 0x83, 0xb2, 0xf0, 0xfc, 0x9b, 0xbf, 0x2e, 0x11, 0x98, 0xbc, 0x0a,
	0x3c, 0x2c, 0x4a, 0x73, 0x30, 0xaf, 0xa4, 0xbf, 0x1a, 0x70, 0xc2, 0x50, 0xf0, 0x2c, 0xf1, 0xf0,
	0x86, 0x87, 0x81, 0xb7, 0xfa, 0x2e, 0xc3, 0x64, 0x45, 0x1e, 0x41, 0x63, 0xb6, 0x5a, 0xa2, 0x65,
	0xf4, 0x8c, 0xfe, 0xf1, 0xf0, 0x53, 0x5b, 0x2a, 0xb3, 0x77, 0x10, 0x6d, 0xf5, 0x57, 0x52, 0x99,
	0x2a, 0x20, 0x5d, 0x68, 0xdd, 0x09, 0x4c, 0x9e, 0xfa, 0x56, 0xad, 0x67, 0xf4, 0x4d, 0x56, 0x44,
	0xf4, 0x6b, 0x30, 0x4b, 0x2a, 0x39, 0x84, 0xb6, 0x33, 0x9d, 0xcc, 0xae, 0x7e, 0x98, 0x75, 0xde,
	0x23, 0x6d, 0xa8, 0x8f, 0x26, 0x3f, 0x76, 0x0c, 0x72, 0x00, 0x8d, 0xc9, 0x74, 0x72, 0xd5, 0xa9,
	0xc9, 0xa7, 0xbb, 0xdb, 0x2b, 0xd6, 0xa9, 0xd3, 0xdf, 0x6a, 0xf0, 0xc1, 0x2d, 0xba, 0x89, 0xf7,
	0x92, 0xf1, 0x10, 0x19, 0xfe, 0x9c, 0xa1, 0x48, 0x89, 0x0d, 0x6d, 0xd9, 0x2c, 0x40, 0x61, 0x19,
	0xbd, 0x7a, 0xff, 0x70, 0x78, 0x6a, 0x4b, 0x33, 0x24, 0xe5, 0x36, 0x88, 0xe7, 0x21, 0xaa, 0xa3,
	0x98, 0x26, 0x91, 0x67, 0x3b, 0x87, 0xb4, 0xda, 0x3d, 0xa3, 0x7f, 0x38, 0x3c, 0x7b, 0xeb, 0x70,
	0x6c, 0xa7, 0x35, 0x5d, 0x68, 0x4d, 0x5f, 0xbc, 0x10, 0x98, 0xaa, 0x09, 0xeb, 0xac, 0x88, 0xc8,
	0x29, 0x34, 0xc7, 0x41, 0x14, 0xa4, 0x56, 0x5d, 0xc1, 0x79, 0x40, 0x2c, 0x68, 0x3f, 0x49, 0x78,
	0xb6, 0xbc, 0x5c, 0x59, 0x8d, 0x9e, 0xd1, 0x6f, 0x32, 0x1d, 0x92, 0x0b, 0x30, 0x1d, 0x9e, 0xc5,
	0xe9, 0x34, 0x0e, 0x57, 0x56, 0xb3, 0x67, 0xf4, 0x0f, 0xd8, 0x1a, 0x20, 0x5f, 0x81, 0x39, 0x5d,
	0x62, 0xe2, 0xa6, 0x01, 0x8f, 0xad, 0x96, 0xda, 0x42, 0xd7, 0x2e, 0x16, 0x69, 0x97, 0x19, 0x65,
	0xfc, 0x9a, 0x48, 0x87, 0x70, 0x4f, 0x9a, 0x20, 0x1c, 0x1e, 0x86, 0xe8, 0x49, 0x88, 0x7c, 0x0c,
	0x4d, 0x05, 0x15, 0x4e, 0x99, 0xa5, 0x53, 0x2c, 0xc7, 0x2b, 0x16, 0xcb, 0x55, 0xed, 0xb1, 0x58,
	0x52, 0xde, 0x6d, 0x8b, 0x17, 0x70, 0x4f, 0x9a, 0x50, 0xb5, 0xf8, 0x13, 0x68, 0xa9, 0x13, 0x37,
	0x3d, 0x56, 0x6e, 0x16, 0x09, 0xb9, 0x05, 0x55, 0x65, 0xd5, 0xb6, 0x19, 0x39, 0x2e, 0x47, 0x9b,
	0xf1, 0xd4, 0x0d, 0xd5, 0x68, 0x4d, 0x96, 0x07, 0xb4, 0x0f, 0xef, 0x5f, 0x06, 0xb1, 0xcf, 0x50,
	0x2c, 0x79, 0x2c, 0x50, 0x8e, 0x7a, 0x9b, 0x79, 0x1e, 0x0a, 0xa1, 0x6e, 0xe6, 0x01, 0xd3, 0x21,
	0xfd, 0xc3, 0x80, 0x4e, 0xbe, 0xc5, 0x91, 0x33, 0xd6, 0x4b, 0xfc, 0x62, 0x7b, 0x89, 0x27, 0xea,
	0xdc, 0x91, 0x33, 0xde, 0xb9, 0xc3, 0xff, 0xb3, 0xed, 0x0e, 0x1c, 0x8d, 0x9c, 0x71, 0xc5, 0xf4,
	0x0b, 0x68, 0x8c, 0x9c, 0xb1, 0x1e, 0xec, 0x40, 0x0f, 0xc6, 0x14, 0xba, 0xb6, 0xb3, 0x56, 0xb5,
	0xf3, 0xf7, 0x1a, 0x74, 0x73, 0x93, 0xbe, 0xe7, 0xc9, 0x42, 0x2c, 0x5d, 0xaf, 0x7c, 0xa5, 0x3c,
	0xd8, 0xb6, 0xea, 0x4c, 0x75, 0x2c, 0x79, 0xef, 0xf6, 0x8f, 0xfe, 0x27, 0x38, 0x29, 0x9d, 0xa8,
	0xec, 0xc0, 0x06, 0x28, 0x61, 0xed, 0xdb, 0xf1, 0xa6, 0x6f, 0xac, 0xc2, 0x78, 0xcb, 0x56, 0x46,
	0x40, 0xe4, 0x1d, 0xb8, 0xc6, 0xd4, 0xad, 0xf4, 0xfe, 0x1c, 0x4c, 0x89, 0xf8, 0x6e, 0xea, 0xea,
	0xd6, 0x47, 0xe5, 0xad, 0x91, 0x19, 0xb6, 0xce, 0xd3, 0x3b, 0xf8, 0x48, 0xc3, 0x13, 0x37, 0xc2,
	0x6d, 0x9d, 0x0f, 0x01, 0x4a, 0x58, 0x37, 0xeb, 0x6e, 0x34, 0x2b, 0xd3, 0xac, 0xc2, 0xa4, 0x8f,
	0xe0, 0xc3, 0x71, 0x20, 0x52, 0x4d, 0x9a, 0xb9, 0x73, 0xa1, 0x7f, 0x2f, 0x17, 0x60, 0x96, 0x44,
	0x75, 0x17, 0x4d, 0xb6, 0x06, 0xa8, 0x0d, 0xd6, 0x9b, 0x85, 0xc5, 0x1d, 0x26, 0xd0, 0x90, 0xb1,
	0x92, 0x61, 0x32, 0xf5, 0x4c, 0x9f, 0xc0, 0xfd, 0x9b, 0xac, 0x4a, 0xff, 0x5b, 0xc7, 0x90, 0x0e,
	0xd4, 0x67, 0xee, 0xbc, 0xf8, 0xd2, 0xca, 0x47, 0x3a, 0x84, 0xee, 0x76, 0xa3, 0xbd, 0xaf, 0x8e,
	0x6b, 0x38, 0x7b, 0x8c, 0x21, 0xa6, 0xf8, 0x8f, 0xe7, 0x2c, 0x67, 0xc9, 0x15, 0xe4, 0xb3, 0x3c,
	0x84, 0xf3, 0x5d, 0xed, 0xf6, 0xca, 0xe8, 0xc2, 0xa9, 0xac, 0xb8, 0xe4, 0x7c, 0x11, 0xb9, 0xc9,
	0x42, 0x2b, 0xa0, 0x9f, 0xc1, 0x11, 0xc3, 0x57, 0x7c, 0x51, 0x5e, 0x55, 0x0b, 0xda, 0x33, 0xbe,
	0xc0, 0xf8, 0xa9, 0x5f, 0x08, 0xd2, 0x21, 0x7d, 0x0c, 0xc7, 0x9a, 0xba, 0xef, 0x38, 0x99, 0xb9,
	0x46, 0x21, 0xdc, 0x39, 0x16, 0xea, 0x75, 0x48, 0xbf, 0x85, 0x33, 0x86, 0x02, 0xd3, 0x1b, 0x57,
	0x88, 0xd7, 0x3c, 0xf1, 0x55, 0xf7, 0x8a, 0x1f, 0x52, 0xe5, 0x98, 0xcf, 0x83, 0x58, 0xfb, 0x51,
	0x02, 0xf4, 0x06, 0xce, 0x77, 0x95, 0xfe, 0x07, 0x31, 0xbf, 0x18, 0x70, 0xba, 0xd1, 0x72, 0xfd,
	0x81, 0x26, 0x6f, 0x1e, 0x55, 0x28, 0xda, 0x91, 0xd9, 0x14, 0x5e, 0xdb, 0x12, 0x4e, 0x7a, 0x70,
	0x38, 0xc1, 0xd7, 0xba, 0x42, 0xbd, 0x6a, 0x4c, 0x56, 0x85, 0xe8, 0x33, 0xb8, 0xbf, 0xa5, 0xe3,
	0xdf, 0x4f, 0xf5, 0xbc, 0xa5, 0xfe, 0xfb, 0x7c, 0xf0, 0x67, 0x00, 0x00, 0x00, 0xff, 0xff, 0x08,
	0xfb, 0x58, 0x69, 0xfd, 0x0a, 0x00, 0x00,
}
