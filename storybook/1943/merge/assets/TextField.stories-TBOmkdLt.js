import{j as e}from"./iframe-Bi2SfRmV.js";import{A as j}from"./ActionGroup-BuBZsTiM.js";import{B as p}from"./Button-D5Xd0LEq.js";import{L as o}from"./Label-Bf2ieprX.js";import{S as f}from"./Section-Cfydu9Ov.js";import{T as n}from"./TextField-BQ4jwebk.js";import{a as N,u as b,F,t as S}from"./Form-B5qWMYwg.js";import{s as O}from"./Action-C4D1p-D4.js";import"./PropsContextProvider-DaoyFYJY.js";import"./mergeRefs-DG37ux9F.js";import"./index-BPrHKF6N.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CbuIGg6y.js";import"./useStatic-DCDW6go-.js";import"./IconWarning-Bplgov_i.js";import"./Text-BBB4yGC-.js";import"./browser-B5YnOpHr.js";import"./EmulatedBoldText-B38Yfz1K.js";import"./Text-CkSKd-Z_.js";import"./utils-Dxcmwd9a.js";import"./LoadingSpinner-ClEMvWD9.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BS293wUk.js";import"./context-BhsUJEB9.js";import"./Button-D6XrWsvH.js";import"./ProgressBar-Dobb74j3.js";import"./Label-HBAOkOC5.js";import"./Hidden-B9tBmOSG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-A5VLCzVG.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BC_RRwfM.js";import"./useFocus-C-Ng-ghT.js";import"./useFocusRing-Cut0-bC1.js";import"./useFocusable-CoivSZnS.js";import"./ContextMenuSection-BwTv2FGo.js";import"./Dialog-MyAkaQuV.js";import"./RSPContexts-SSRv2tEc.js";import"./OverlayArrow-B-xht0if.js";import"./useControlledState-CIKoypYK.js";import"./Collection-Bq_myMt6.js";import"./CollectionBuilder-DhC4o9GF.js";import"./Separator-D9zMzSnu.js";import"./Group-CNmX4nS8.js";import"./SearchField-BM55Blft.js";import"./FieldError-BIS3uJRl.js";import"./Form-B_Pu4x7F.js";import"./useTextField-CloIwySk.js";import"./useFormReset-BRME98Hv.js";import"./TextField-Cs62mBed.js";import"./useEvent-62uCNpCU.js";import"./SelectionManager-DBvQYGX_.js";import"./useCollator-nLcbAmPr.js";import"./FocusScope-lVODcCJ_.js";import"./VisuallyHidden-DCu-7XPb.js";import"./TextFieldBase-QRWhEv0X.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-CmL2Tr0U.js";import"./FieldDescription-UVUQlGhH.js";import"./ReactAriaControlledValueFix-Dy_Ld-FZ.js";import"./context-BL-ZIP9s.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
