import{j as e}from"./iframe-D9T-SQ_w.js";import{A as j}from"./ActionGroup-o9bdAQZo.js";import{B as p}from"./Button-DTUBFRfD.js";import{L as o}from"./Label-BSTVZqJp.js";import{S as f}from"./Section-Dy49rPJx.js";import{T as n}from"./TextField-DEXjTuLE.js";import{a as N,u as b,F,t as S}from"./Form-BJzujqly.js";import{s as O}from"./Action-DYSYcGA4.js";import"./PropsContextProvider-DOfdVnxG.js";import"./mergeRefs-Dpt4nLOm.js";import"./index-MwhQmWus.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DWP6Eju1.js";import"./useStatic-CzpehBqE.js";import"./IconWarning-D9gb5D__.js";import"./Text-DV6mBCf8.js";import"./browser-BxWBoSIU.js";import"./EmulatedBoldText-DAr7Y6gD.js";import"./Text-ClgQ9ANO.js";import"./utils-DnMOHCo2.js";import"./LoadingSpinner-DnW7ID0m.js";import"./useLocalizedStringFormatter-DPVccqQm.js";import"./context-1X1M6th-.js";import"./Button-CgtNxK_E.js";import"./ProgressBar-DwCiEGCB.js";import"./Label-BiAaxhJ7.js";import"./Hidden-SV0U3IVR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DgmVUIzX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DglIwZgS.js";import"./useFocus-BzfdG_e6.js";import"./useFocusRing-ZVwQEQ-X.js";import"./useFocusable-BvY9usgM.js";import"./ContextMenuSection-DMb_WIEt.js";import"./Dialog-CcOmolEx.js";import"./RSPContexts-Mr9JIPza.js";import"./OverlayArrow-C2Xh83El.js";import"./useControlledState-iBkipCXW.js";import"./Collection-DoXxkf38.js";import"./CollectionBuilder-F1uF5_xz.js";import"./Separator-BPxbBsrv.js";import"./Group-D8pjdbbd.js";import"./SearchField-BlkgpjOt.js";import"./FieldError-CZoysCXy.js";import"./Form-CWxNV6uB.js";import"./useTextField-q7WjWLDn.js";import"./useFormReset-BokEu4v1.js";import"./TextField-CQIeTEIt.js";import"./useEvent-B9biFPGH.js";import"./SelectionManager-C0FPyjqE.js";import"./useCollator-CYP1g-jw.js";import"./FocusScope-Bai1ujT7.js";import"./VisuallyHidden-DQCLJ5yw.js";import"./TextFieldBase-VV228UUH.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Co5krp6V.js";import"./FieldDescription-UW2WuRr2.js";import"./ReactAriaControlledValueFix-CtIphNlE.js";import"./context-4_PGxGcD.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    interface Values {
      name: string;
    }
    const handleOnSubmit = (values: Values) => {
      submitAction(values);
    };
    const form = useForm<Values>({
      defaultValues: {
        name: ""
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={handleOnSubmit}>
        <Section>
          <Field name="name">
            <TextField value={form.watch("name")} onChange={val => {
            form.setValue("name", val.toUpperCase());
          }}>
              <Label>Name</Label>
            </TextField>
          </Field>
          <ActionGroup>
            <Button type="submit">Submit</Button>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Be=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Be as __namedExportsOrder,we as default};
