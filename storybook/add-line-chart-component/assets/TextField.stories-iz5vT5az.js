import{j as e}from"./iframe-DHE-6oks.js";import{A as j}from"./ActionGroup-BHyeeSSX.js";import{B as p}from"./Button-DTmWymNY.js";import{L as o}from"./Label-CsrQ8fuF.js";import{S as f}from"./Section-hBJqb3I5.js";import{T as m}from"./TextField-BSAKO7nd.js";import{a as N,u as b,F,t as S}from"./Form-Cv2JPUa-.js";import{s as O}from"./Action-VI9cAUPd.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BAwn8Ach.js";import"./useStatic-RbPw01cN.js";import"./IconWarning-Cic1MV-m.js";import"./Text-DvqkAO4K.js";import"./browser-DInQ8S6B.js";import"./EmulatedBoldText-h05YTKz1.js";import"./Text-NjMLt3Ri.js";import"./utils-x8BQYX4-.js";import"./LoadingSpinner-CGq1_nld.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./context-DFltFWpJ.js";import"./Button-Dx38wLWj.js";import"./ProgressBar-D7CY6Vap.js";import"./Label-CRHcOnwp.js";import"./Hidden-wM-8btK_.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DfuADmFb.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKLIgAwR.js";import"./useFocus-DYGSM8hG.js";import"./useFocusRing-OVXrKScL.js";import"./useFocusable-BqyWOhG-.js";import"./ContextMenuSection-rhbKwxLA.js";import"./Dialog-CmbCeDcm.js";import"./RSPContexts-B_OykxZB.js";import"./OverlayArrow-BzBmdrc3.js";import"./useControlledState-DtNNEi2b.js";import"./Collection-DvDkMv-D.js";import"./CollectionBuilder-DOrrKo3i.js";import"./Separator-s586xCfF.js";import"./Input-DW8k9amG.js";import"./SearchField-B1O_97SX.js";import"./FieldError-B9K2-GIk.js";import"./Form-B4xkNDou.js";import"./Group-DF6Pci-D.js";import"./useTextField-C3m2uMQS.js";import"./useFormReset-BToKGHXS.js";import"./TextField-D2dBDnFN.js";import"./SelectionManager-jb_M3DhH.js";import"./useEvent-DAUMmEgK.js";import"./useCollator-_wAd7c24.js";import"./FocusScope-DduXebcv.js";import"./VisuallyHidden-JQCaE509.js";import"./TextFieldBase-Rx3oEasl.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-cJslzypo.js";import"./FieldDescription-EPVobIp_.js";import"./ReactAriaControlledValueFix-Dr1Gi7yv.js";import"./context-C7gD2f3O.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const De=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,De as __namedExportsOrder,Be as default};
