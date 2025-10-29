import{j as e,r as S}from"./iframe-Tz0J7D4Y.js";import{A as F}from"./ActionGroup-B5YBX1jR.js";import{B as m}from"./Button-DpdNCW8h.js";import{L as n}from"./Label-B5yMZfoe.js";import{S as f}from"./Section-weR_orzI.js";import{T as t}from"./TextField-DI7BE6oA.js";import{a as h,u,F as p,t as j}from"./Form-BgW8CYzp.js";import{s as x}from"./Action-DDvM_T4v.js";import{F as g}from"./useFieldComponent-C0OSANtm.js";import"./index-nuYtCEEu.js";import"./dynamic-CoftMrEe.js";import"./flowComponent-D9iztwJS.js";import"./index-VdFQ9tny.js";import"./clsx-B-dksMZM.js";import"./index-DcQDRvJj.js";import"./getActionGroupSlot-DlZypVxI.js";import"./useStatic-BDAMVNvv.js";import"./IconWarning-GPTcuJJ8.js";import"./Text-C3A_eB8w.js";import"./browser-D-jX3MAX.js";import"./EmulatedBoldText-BtDnNRTP.js";import"./Text-c129sBMT.js";import"./utils-ja91N2Nx.js";import"./LoadingSpinner-BMsTEO2Y.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-C_7XcxTl.js";import"./context-B1lt5Uf-.js";import"./Button-BC9SKpFI.js";import"./ProgressBar-netLLnC9.js";import"./Label-CPyZQCy0.js";import"./Hidden-DjVegiGf.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Uehxuchb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Dhdcn6rN.js";import"./useFocus-rnV-N6wP.js";import"./useFocusRing-DD4M3uYZ.js";import"./useFocusable-CEtDZmZ1.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-8rmu86AD.js";import"./Dialog-BCA3xQKB.js";import"./RSPContexts-DMflUE_X.js";import"./OverlayArrow-Dm3PErwP.js";import"./useControlledState-JfMoTEl5.js";import"./Collection-CbkRGRtR.js";import"./CollectionBuilder-H4miGbTt.js";import"./SelectionIndicator-UdR--M88.js";import"./Separator-Dwu5egoh.js";import"./SelectionManager-CcDSxweN.js";import"./useEvent-C9-diYfc.js";import"./useCollator-Sp-uU6d6.js";import"./FocusScope-DD4VjzQ6.js";import"./VisuallyHidden-uhmmiNoS.js";import"./TextFieldBase-C6gFZZHT.js";import"./FieldDescription-DfQkIZob.js";import"./TextField-CpTqvAvM.js";import"./Form-CgZM-WfL.js";import"./Group-BWtr-S31.js";import"./Input-fTg0rFoa.js";import"./useTextField-BJgUARR-.js";import"./useFormReset-Dr7kbm5c.js";import"./useFormValidation-BhAnQ22o.js";import"./ReactAriaControlledValueFix-rP8sVaUU.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./context-CCjUHDCq.js";import"./react-children-utilities-q3rjAEhP.js";import"./ClearPropsContext-DQdi6jL0.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,b=y("submit"),Me={title:"Integrations/React Hook Form/TextField",component:h,render:()=>{const o=async s=>{await x(1500),b(s)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(t,{maxLength:10,showCharacterCount:!0,children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(t,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(n,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(t,{children:e.jsx(n,{children:"Name"})})}),e.jsxs(F,{children:[e.jsx(m,{type:"reset",children:"Reset"}),e.jsx(m,{type:"submit",children:"Submit"})]})]})})}},a={},l={render:()=>{const o=s=>{b(s)},r=u({defaultValues:{name:""}}),i=j();return e.jsx(p,{form:r,onSubmit:o,children:e.jsxs(f,{children:[e.jsx(i,{name:"name",children:e.jsx(t,{value:r.watch("name"),onChange:s=>{r.setValue("name",s.toUpperCase())},children:e.jsx(n,{children:"Name"})})}),e.jsx(F,{children:e.jsx(m,{type:"submit",children:"Submit"})})]})})}},d={render:()=>{const o=u();return S.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(p,{form:o,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{children:e.jsx(n,{children:"Field"})})}),e.jsxs(t,{isInvalid:!0,children:[e.jsx(n,{children:"Field"}),e.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},c={render:o=>{const r=u();return e.jsxs(p,{form:r,onSubmit:async()=>await x(2e3),children:[e.jsx(h,{name:"field",children:e.jsx(t,{...o,type:"email",inputMode:"email",children:e.jsx(n,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(m,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(m,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(m,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField>
            <Label>Field</Label>
          </TextField>
        </Field>
        <TextField isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextField>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextField {...props} type="email" inputMode="email">
            <Label>Field</Label>
          </TextField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("field", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("field")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...c.parameters?.docs?.source}}};const Pe=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{a as Default,d as WithFieldError,c as WithFocus,l as WithTransformedValue,Pe as __namedExportsOrder,Me as default};
