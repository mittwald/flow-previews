import{j as e}from"./iframe-DL1Xk_TW.js";import{A as j}from"./ActionGroup-BaSOhNto.js";import{B as p}from"./Button-CSYR-8zw.js";import{L as o}from"./Label-SV9dpIxu.js";import{S as f}from"./Section-MugfZB9e.js";import{T as n}from"./TextField-PMBYJpEE.js";import{a as N,u as b,F,t as S}from"./Form-DV_dswRy.js";import{s as O}from"./Action-CgnUnXh6.js";import"./PropsContextProvider-CiZc51HM.js";import"./mergeRefs-BSp0TNwj.js";import"./index-DqZKnEqd.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-BqQnBfv6.js";import"./useStatic-CDHuYpjM.js";import"./IconWarning-CDWDVN9t.js";import"./Text-BarKc5iO.js";import"./browser-DlWkPxXn.js";import"./EmulatedBoldText-Cuoo9C-B.js";import"./Text-hY-xwtRO.js";import"./utils-CQ_zdhKT.js";import"./LoadingSpinner-eLX_rEKw.js";import"./useLocalizedStringFormatter-C3W1UUyM.js";import"./context-DL9YfZ-4.js";import"./Button-D1cW4wjn.js";import"./ProgressBar-B-kphiC_.js";import"./Label-BAbeU0V_.js";import"./Hidden-DR9x0YX2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-W7XlL7TD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DN8Ip39y.js";import"./useFocus-XNeQty2s.js";import"./useFocusRing-Ch_JF-Gz.js";import"./useFocusable-D0Knm-Aw.js";import"./ContextMenuSection-CmRAw-Ct.js";import"./Dialog-BV4IJ0nk.js";import"./RSPContexts-x84Hoe_h.js";import"./OverlayArrow-D3HDkbZg.js";import"./useControlledState-m-GoXsAY.js";import"./Collection-C6Hsa1NN.js";import"./CollectionBuilder-DomLDs3M.js";import"./Separator-7Z7HyIGD.js";import"./Group-Dvl4nkih.js";import"./SearchField-DmEcaw4n.js";import"./FieldError-BUlchV0X.js";import"./Form-DgOn25JB.js";import"./useTextField-D29gkUES.js";import"./useFormReset-BVtOSdS9.js";import"./TextField-DfEA8x8Q.js";import"./useEvent-BwN_9XGI.js";import"./SelectionManager-98zZcpep.js";import"./useCollator-CIWymtw-.js";import"./FocusScope-CddfFBWs.js";import"./VisuallyHidden-OD3rFgcd.js";import"./TextFieldBase-Cb84JLKb.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Bwu7YAhf.js";import"./FieldDescription-Ccb3lPr4.js";import"./ReactAriaControlledValueFix-Ojhfm2y0.js";import"./context-DUQna2Na.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
