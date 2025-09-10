import{j as e}from"./iframe-CRsb57af.js";import{A as j}from"./ActionGroup-CcnHQOWv.js";import{B as p}from"./Button-c2AsubDx.js";import{L as o}from"./Label-sr3fNKeT.js";import{S as f}from"./Section-CKrLRysS.js";import{T as n}from"./TextField-CBWfQBLO.js";import{a as N,u as b,F,t as S}from"./Form-4WviLq8T.js";import{s as O}from"./Action-CddrIjFT.js";import"./PropsContextProvider-BR4-1agz.js";import"./mergeRefs-DplnSgkI.js";import"./index-CuZmym5e.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-DOvThARP.js";import"./useStatic-l_ZOo8Ze.js";import"./IconWarning-CcDYRP7s.js";import"./Text-BeV7pvCv.js";import"./browser-KjD5DeSR.js";import"./EmulatedBoldText-LP_9OJ0Q.js";import"./Text-Dc62rOGI.js";import"./utils-CwotMdLX.js";import"./LoadingSpinner-BbraRPFj.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BRTflqfT.js";import"./context-DoWLFUeS.js";import"./Button-kIpzmIw-.js";import"./ProgressBar-B7_oEUBN.js";import"./Label-ePem4EPa.js";import"./Hidden-CvrWtM-J.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtSNSJe6.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DBBuz-CW.js";import"./useFocus-DbNAjYIm.js";import"./useFocusRing-UHNYZFwC.js";import"./useFocusable-YH2tkZSf.js";import"./ContextMenuSection-BD6Fmfit.js";import"./Dialog-J7-PabLc.js";import"./RSPContexts-BEiHDPhP.js";import"./OverlayArrow-CXvzgL8W.js";import"./useControlledState-DgD7b91N.js";import"./Collection-BmFAT2ID.js";import"./CollectionBuilder-CTW40qd5.js";import"./Separator-Be5OBuwC.js";import"./Group-BRcAYOXB.js";import"./SearchField-Dc_y5Vr7.js";import"./FieldError-B33IY45p.js";import"./Form-DcCFXF0q.js";import"./useTextField-DakxfzUT.js";import"./useFormReset-Dz46-Gvc.js";import"./TextField-CrxNrIk9.js";import"./useEvent-DYe7cJIX.js";import"./SelectionManager-vl9_ChBd.js";import"./useCollator-BqnPvmV5.js";import"./FocusScope-B2MzAavW.js";import"./VisuallyHidden-zV1rhxGD.js";import"./TextFieldBase-ycfFHvOF.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-Bqe2SFUH.js";import"./FieldDescription-BsSNlfA2.js";import"./ReactAriaControlledValueFix-BCa7HjQH.js";import"./context-q8TPx0Dl.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
