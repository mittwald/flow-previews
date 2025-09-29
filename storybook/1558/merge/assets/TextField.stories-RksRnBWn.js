import{j as e}from"./iframe-BIwOddjN.js";import{A as j}from"./ActionGroup-CROpn8dS.js";import{B as p}from"./Button-DVKpBB_-.js";import{L as t}from"./Label-B4Iiqc5w.js";import{S as f}from"./Section-IxcUonDm.js";import{T as o}from"./TextField-c-jZgo2Z.js";import{a as V,u as b,F,t as S}from"./Form-DjUL3FMV.js";import{s as g}from"./Action-DaT8fcnF.js";import"./index-Cun1SEai.js";import"./dynamic-copMXHk7.js";import"./PropsContextProvider-DqT3XDtE.js";import"./mergeRefs-wvzFS0ov.js";import"./index-CyjKSzst.js";import"./clsx-B-dksMZM.js";import"./getActionGroupSlot-CgWgqcfK.js";import"./useStatic-CAHKYPS0.js";import"./IconWarning-DNMJ1XNo.js";import"./Text-3VIHsAGv.js";import"./browser-6nVKIs6I.js";import"./EmulatedBoldText-C5hkPB09.js";import"./Text-D1MRO4dn.js";import"./utils-DPukZ4w7.js";import"./LoadingSpinner-CG5b-Kig.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CJPccLDK.js";import"./context-CbJ8Tawl.js";import"./Button-DDY6r886.js";import"./ProgressBar-CzA5dAYd.js";import"./Label-CW0KcP1q.js";import"./Hidden-D6potscK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DBHdatlR.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-4QX-FuAL.js";import"./useFocus-Cj2Pu7gn.js";import"./useFocusRing-Dx0gNijd.js";import"./useFocusable-CxKBVkW3.js";import"./ContextMenuSection-BB_BekT5.js";import"./Popover-BYGuuW82.js";import"./DialogTriggerView-D6nKQ5a7.js";import"./context-CorlgKQy.js";import"./RSPContexts-CSo-c8h2.js";import"./ClearPropsContextView-CLESuCpt.js";import"./useControlledState-B4IhsBlg.js";import"./FocusScope-CDSFipnx.js";import"./useCollator-vh40vrkm.js";import"./VisuallyHidden-En5QTDR8.js";import"./Collection-YqThax3x.js";import"./CollectionBuilder-DWtnsQIQ.js";import"./context-Cplzyq73.js";import"./Separator-DroliD3e.js";import"./SelectionManager-CuYmYu-p.js";import"./useEvent-BngoJEfX.js";import"./Switch-Cz6oMetu.js";import"./useToggleState-Bpv2J7zI.js";import"./useFormReset-FXsWoN_h.js";import"./TextFieldBase-CZqnrCXJ.js";import"./FormField.module-CqWyJNQI.js";import"./FieldError-B63dcrBv.js";import"./FieldError-BSmtWAN4.js";import"./FieldDescription-CuTbHSSK.js";import"./TextField-CK3Fd1lq.js";import"./Form-DjKVzcCs.js";import"./Group-D1uUUTSd.js";import"./Input-BEzcl50g.js";import"./useTextField-CdGi1PVy.js";import"./useFormValidation-DXfcJvC1.js";import"./ReactAriaControlledValueFix-3bxT__-Q.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";const{action:L}=__STORYBOOK_MODULE_ACTIONS__,N=L("submit"),Ge={title:"Integrations/React Hook Form/TextField",component:V,render:()=>{const s=async n=>{await g(1500),N(n)},m=b({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"controlledName",children:e.jsx(o,{value:m.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(r,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(p,{type:"reset",children:"Reset"}),e.jsx(p,{type:"submit",children:"Submit"})]})]})})}},i={},a={render:()=>{const s=n=>{N(n)},m=b({defaultValues:{name:""}}),r=S();return e.jsx(F,{form:m,onSubmit:s,children:e.jsxs(f,{children:[e.jsx(r,{name:"name",children:e.jsx(o,{value:m.watch("name"),onChange:n=>{m.setValue("name",n.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsx(j,{children:e.jsx(p,{type:"submit",children:"Submit"})})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,h,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const Ie=["Default","WithTransformedValue"];export{i as Default,a as WithTransformedValue,Ie as __namedExportsOrder,Ge as default};
