import{j as e,r as E}from"./iframe-B7RREkGu.js";import{A as j}from"./ActionGroup-WdHpAfwq.js";import{B as F}from"./Button-TsdLobX9.js";import{L as t}from"./Label-DJkUDzdc.js";import{S as b}from"./Section-D2KxvX5n.js";import{T as o}from"./TextField-2VXbuv2z.js";import{F as p,t as S}from"./Field-BIj9crRk.js";import{s as h}from"./Action-BcGzUsr7.js";import{u,F as c}from"./Form-BHjZ7jIc.js";import{F as B}from"./FieldError-CukmHJnZ.js";import{R as x}from"./ResetButton-feHLzk8J.js";import{S as f}from"./SubmitButton-DO8cAR1F.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CWl0hyOW.js";import"./flowComponent-Ck0proso.js";import"./index-DRk3fGOo.js";import"./clsx-B-dksMZM.js";import"./index-C8g7-GlJ.js";import"./getActionGroupSlot-DiF9Ne2F.js";import"./useStatic-tA9-ZYDd.js";import"./IconChevronDown-D-2czTjO.js";import"./remote-Ba-TbkWY.js";import"./IconX-B38mn789.js";import"./IconCheck-KHnf6U2_.js";import"./Text-DoQtsqjx.js";import"./browser-DkVC7uJT.js";import"./EmulatedBoldText-Coo_6hrl.js";import"./Text-CPOpiDMW.js";import"./utils-IlafnyMI.js";import"./LoadingSpinner-BcPCL_oT.js";import"./ariaLive-Cy4z0itg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-DPy56mLw.js";import"./context-Bh5Je-Bl.js";import"./Button-0GEfT2Oo.js";import"./ProgressBar-DnQzXKKa.js";import"./Label-B5AW6xg7.js";import"./Hidden-zIyTGZgm.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Br_94_1T.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C4dOiegp.js";import"./useFocus-BaUOkNoz.js";import"./useFocusRing-BOQTp4b_.js";import"./useFocusable-BSgkjvKf.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CYbe8IBJ.js";import"./lib-90ocxLs-.js";import"./Dialog-DUDQW2g7.js";import"./RSPContexts-ByjogFSB.js";import"./OverlayArrow-CQB6hAQJ.js";import"./useControlledState-CfgggjdY.js";import"./Collection-D4FMjQ2t.js";import"./CollectionBuilder-CqiHWup6.js";import"./SelectionIndicator-BAdp0X2f.js";import"./Separator-BITuXniK.js";import"./SelectionManager-DVNQ1E_K.js";import"./useEvent-I95ZQAll.js";import"./useCollator-DB2PW37J.js";import"./FocusScope-BWn7UZVq.js";import"./VisuallyHidden-BevTIdSp.js";import"./TextFieldBase-KWYLrW2_.js";import"./FieldDescription-WN9h5Djj.js";import"./useFieldComponent-B2EVEjTj.js";import"./TextField-BPUY2Bu_.js";import"./FieldError-C0DtTLwc.js";import"./Form-C5YY3R3J.js";import"./Group-CDE79XeV.js";import"./Input-CdWy1INE.js";import"./useTextField-BewiyiMO.js";import"./useFormReset-OFQGg9Qq.js";import"./useFormValidation-CU0n9v2w.js";import"./useControlledHostValueProps-BaDoBa4u.js";import"./context-BZ5WwvCq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-DT-iZjBY.js";import"./useRef-2iCe8zXG.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const n=async m=>{await h(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:n,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
            <ResetButton>Reset</ResetButton>
            <SubmitButton>Submit</SubmitButton>
          </ActionGroup>
        </Section>
      </Form>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...d.parameters?.docs?.source}}};const ze=["Default","WithTransformedValue","WithFieldError","WithFocus"];export{s as Default,l as WithFieldError,d as WithFocus,a as WithTransformedValue,ze as __namedExportsOrder,Ye as default};
