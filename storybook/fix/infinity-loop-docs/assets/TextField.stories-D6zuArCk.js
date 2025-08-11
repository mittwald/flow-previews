import{j as e}from"./iframe-Cvd7_oGo.js";import{A as j}from"./ActionGroup-BkvpjQxX.js";import{B as p}from"./Button-sQLGDwHF.js";import{L as o}from"./Label-DZmXl-gv.js";import{S as f}from"./Section-Bv0sDR2y.js";import{T as n}from"./TextField-BvJMx_YT.js";import{a as N,u as b,F,t as S}from"./Form-Bw5yIT9r.js";import{s as O}from"./Action-BDVxDuzM.js";import"./PropsContextProvider-CjZ8S_R8.js";import"./mergeRefs-CjEz_01H.js";import"./index-DRhNAo74.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-Bjasv4sz.js";import"./useStatic-JoVb8Rwt.js";import"./IconWarning-x_Sg-cyk.js";import"./Text-hU5scIVG.js";import"./browser-Dthgcr78.js";import"./EmulatedBoldText-DDsUBT92.js";import"./Text-K3zhr9uI.js";import"./utils-DLoLmG8U.js";import"./LoadingSpinner-CO56yyEM.js";import"./useLocalizedStringFormatter-BeSMCKuR.js";import"./context-CPCW_rIy.js";import"./Button-DH0dq0mD.js";import"./ProgressBar-Cckw_t5H.js";import"./Label-CEN2LQcE.js";import"./Hidden-DIqvoFI_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C20I_MYv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-dFXSg5ro.js";import"./useFocus-mBCJQH3P.js";import"./useFocusRing-BORhh_J0.js";import"./useFocusable-ow-zpXhZ.js";import"./ContextMenuSection-D36-o_RP.js";import"./Dialog-B6nmokeD.js";import"./RSPContexts-BNHCum3R.js";import"./OverlayArrow-CZl6Sdtq.js";import"./useControlledState-BRJHAPjA.js";import"./Collection-BUlFfF8c.js";import"./CollectionBuilder-odsoNS1P.js";import"./Separator-UXxAVoEs.js";import"./Group-Dp7absvN.js";import"./SearchField-DmWHOfIU.js";import"./FieldError-BOfQUrOF.js";import"./Form-dIwvv5i0.js";import"./useTextField-DuBMDIMm.js";import"./useFormReset-TshWv7lU.js";import"./TextField-DNfwYwAs.js";import"./useEvent-CHUYW4wm.js";import"./SelectionManager-C8UQ25IV.js";import"./useCollator-Z2E5mfuy.js";import"./FocusScope-_f1yOmDv.js";import"./VisuallyHidden-ZBger3GJ.js";import"./TextFieldBase-CAtv8OjH.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Cucl0v59.js";import"./FieldDescription-DUZO2Lmv.js";import"./ReactAriaControlledValueFix-UTF_PUFd.js";import"./context-BKPp0JFq.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
