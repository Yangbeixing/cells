// Code generated by go-swagger; DO NOT EDIT.

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	strfmt "github.com/go-openapi/strfmt"

	"github.com/go-openapi/swag"
)

// GetWorkspaceInfoOKBody get workspace info o k body
// swagger:model getWorkspaceInfoOKBody
type GetWorkspaceInfoOKBody struct {

	// t o t a l
	TOTAL int64 `json:"TOTAL,omitempty"`

	// u s a g e
	USAGE int64 `json:"USAGE,omitempty"`
}

// Validate validates this get workspace info o k body
func (m *GetWorkspaceInfoOKBody) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *GetWorkspaceInfoOKBody) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *GetWorkspaceInfoOKBody) UnmarshalBinary(b []byte) error {
	var res GetWorkspaceInfoOKBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}