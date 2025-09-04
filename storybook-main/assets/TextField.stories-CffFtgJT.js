import{j as e}from"./iframe-Coh3lrZj.js";import{A as j}from"./ActionGroup-CrLJ68kJ.js";import{B as p}from"./Button-D5EdJ83A.js";import{L as o}from"./Label-K_XjE_tx.js";import{S as f}from"./Section-BDCUJAoe.js";import{T as n}from"./TextField-DoNlTAaS.js";import{a as N,u as b,F,t as S}from"./Form-DkJKFIVl.js";import{s as O}from"./Action-BPx-Vljf.js";import"./PropsContextProvider-CKV7yByX.js";import"./mergeRefs-DvQtY6ho.js";import"./index-CzajoHd7.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BtRAHx2-.js";import"./useStatic-BT-23i_z.js";import"./IconWarning-B1v1dgwn.js";import"./Text-CXTmOKkL.js";import"./browser-8tAA8o9s.js";import"./EmulatedBoldText-CrQvx5NB.js";import"./Text-C-iBrm51.js";import"./utils-CN3w8kPq.js";import"./LoadingSpinner-CX_uswsf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CUiOVI_H.js";import"./context-BpLwYJWu.js";import"./Button-cLSaMy5d.js";import"./ProgressBar-CHLkYv72.js";import"./Label-YsAq_uoV.js";import"./Hidden-DOaFp58p.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BKRPYz_q.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BU16hmOe.js";import"./useFocus-DOmsUoiU.js";import"./useFocusRing-Bz5xuAjx.js";import"./useFocusable-D2foM-gB.js";import"./ContextMenuSection-BRIEUOwp.js";import"./Dialog-DCw7F88C.js";import"./RSPContexts-C359HXMi.js";import"./OverlayArrow-qlVhoYin.js";import"./useControlledState-C1ksr8rK.js";import"./Collection-cAnrSkK1.js";import"./CollectionBuilder-CwtIJ2gd.js";import"./Separator-CwGjgvWm.js";import"./Group-O8MFP4r0.js";import"./SearchField-BwCTywRo.js";import"./FieldError-CZajLekn.js";import"./Form-C7dJ7ChK.js";import"./useTextField-DgBLYHiF.js";import"./useFormReset-0zxdLi8h.js";import"./TextField-DmB3C__1.js";import"./useEvent-D6JeCAIh.js";import"./SelectionManager-DNWvZwOK.js";import"./useCollator-DMqrDDl2.js";import"./FocusScope-Cb054v9_.js";import"./VisuallyHidden-BFztPoj4.js";import"./TextFieldBase-P7s9uemG.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-BUIbxk7v.js";import"./FieldDescription-C5sbRWI1.js";import"./ReactAriaControlledValueFix-CfODHPbD.js";import"./context-B447f_pA.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
