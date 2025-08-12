import{j as e}from"./iframe-C1l4k2HV.js";import{A as j}from"./ActionGroup-BYkyVYsH.js";import{B as p}from"./Button-CknaAKeQ.js";import{L as o}from"./Label-C9vdNbU9.js";import{S as f}from"./Section-BXiL9o1E.js";import{T as n}from"./TextField-DLQkQe0t.js";import{a as N,u as b,F,t as S}from"./Form-Cd9H8Csw.js";import{s as O}from"./Action-D7CpOYlL.js";import"./PropsContextProvider-UGszKfi1.js";import"./mergeRefs-Dwr6BYYS.js";import"./index-D2SS6_dL.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-CEjKYc7J.js";import"./useStatic-B47nXigD.js";import"./IconWarning-DU-YpMEs.js";import"./Text-TULuMeKV.js";import"./browser-kLrz4LrJ.js";import"./EmulatedBoldText-g1-xYpae.js";import"./Text-CRjxumht.js";import"./utils-v9anKdvO.js";import"./LoadingSpinner-CZRDoJTo.js";import"./useLocalizedStringFormatter-Cfss7tUo.js";import"./context-DZKv31KF.js";import"./Button-CNQMHeIL.js";import"./ProgressBar-DvublPU5.js";import"./Label-BgYgpH4h.js";import"./Hidden-Bf1cKpiB.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DOI1XvOs.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DuL0mT4v.js";import"./useFocus-DYgEZHE7.js";import"./useFocusRing-UjyG7JyR.js";import"./useFocusable-BYtFdzHx.js";import"./ContextMenuSection-CTyNXhTO.js";import"./Dialog-TYA03L2P.js";import"./RSPContexts-BcFnB_Bf.js";import"./OverlayArrow-DkLbTEcV.js";import"./useControlledState-C9Oc57Yt.js";import"./Collection-B5WxU_Tr.js";import"./CollectionBuilder-5yucyFA6.js";import"./Separator-DvVADXJA.js";import"./Group-UiVaQAL3.js";import"./SearchField-B9KiNtuR.js";import"./FieldError-1hdg8Lt2.js";import"./Form-AqkLdwZK.js";import"./useTextField-COpDxnv4.js";import"./useFormReset-CBR7MSqM.js";import"./TextField-BUvKpsdJ.js";import"./useEvent-CEVQhyLE.js";import"./SelectionManager-BROy-fD_.js";import"./useCollator-uWxVCJwD.js";import"./FocusScope-CHMeNqcW.js";import"./VisuallyHidden-BCmSOm_5.js";import"./TextFieldBase-Bid_A6oT.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CHl9pdWs.js";import"./FieldDescription-BQR9Rr2h.js";import"./ReactAriaControlledValueFix-BMS3qX9b.js";import"./context-D-GsK0VP.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),we={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async m=>{await O(1500),V(m)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(n,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(n,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(n,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=m=>{V(m)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(n,{value:t.watch("name"),onChange:m=>{t.setValue("name",m.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
