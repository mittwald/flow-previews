import{j as e}from"./iframe-vEDY1jTX.js";import{A as j}from"./ActionGroup-CpH_bKG8.js";import{B as p}from"./Button-xQdRWtXu.js";import{L as o}from"./Label-DkEv0v7K.js";import{S as f}from"./Section-BpxiJqeT.js";import{T as m}from"./TextField-CHdnhX_Y.js";import{a as N,u as b,F,t as S}from"./Form-C1ZoBlgQ.js";import{s as O}from"./Action-B7TuOJwt.js";import"./PropsContextProvider-D1FW-2uj.js";import"./mergeRefs-CKsG1c36.js";import"./index-C6zHk2IC.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-qWDEZv5e.js";import"./useStatic-BCP0-isc.js";import"./IconWarning-Br_z56yn.js";import"./Text-75grQ_r_.js";import"./browser-C6Q9Qk87.js";import"./EmulatedBoldText-CgqQYji0.js";import"./Text-C6tNNGeu.js";import"./utils-gfhUS_KB.js";import"./LoadingSpinner-DEOdZhCL.js";import"./useLocalizedStringFormatter-BqEHuk_G.js";import"./context-DTpTEKQR.js";import"./Button-CkK3LebK.js";import"./ProgressBar-9Fj4GJ2Q.js";import"./Label-DboWEm2w.js";import"./Hidden-Bejm4KRb.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DgiwqdF_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-spwLqW3f.js";import"./useFocus-bOn2kcoo.js";import"./useFocusRing-VIyZvsiy.js";import"./useFocusable-ChYDg6I2.js";import"./ContextMenuSection-C4HwQSFG.js";import"./Dialog-BJmoKeFy.js";import"./RSPContexts-DWSs-nZQ.js";import"./OverlayArrow-twlWLGKk.js";import"./useControlledState-CQf3r7ZL.js";import"./Collection-CGUFB12f.js";import"./CollectionBuilder-Czcc5V6M.js";import"./Separator-CcFrx14D.js";import"./Input-CX0hj3qY.js";import"./SearchField-CjtC4DwQ.js";import"./FieldError-QhGTfIPV.js";import"./Form-CA3We__k.js";import"./Group-Bwqfb8JX.js";import"./useTextField-DyXRlqMQ.js";import"./useFormReset-CgZBEhDH.js";import"./TextField-wFSW5he1.js";import"./SelectionManager-Co-ck4zL.js";import"./useEvent-7vAcQsYf.js";import"./useCollator-F0CDxzTU.js";import"./FocusScope-DqjTzzUX.js";import"./VisuallyHidden-Dyzng5Uc.js";import"./TextFieldBase-BxXOwymi.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-BpiRfXIY.js";import"./FieldDescription-cIrJEjrj.js";import"./ReactAriaControlledValueFix-G-bJsIDm.js";import"./context-CCKbj613.js";const{action:g}=__STORYBOOK_MODULE_ACTIONS__,V=g("submit"),Be={title:"Integrations/React Hook Form/TextField",component:N,render:()=>{const s=async n=>{await O(1500),V(n)},t=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(m,{children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(m,{maxLength:10,showCharacterCount:!0,children:e.jsx(o,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(m,{value:t.watch("controlledName").toUpperCase(),children:e.jsx(o,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{V(n)},t=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:t,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(m,{value:t.watch("name"),onChange:n=>{t.setValue("name",n.toUpperCase())},children:e.jsx(o,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
