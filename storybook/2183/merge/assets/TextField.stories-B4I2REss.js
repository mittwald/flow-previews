import{j as e,r as E}from"./iframe-C0Xzz6Xl.js";import{A as j}from"./ActionGroup-C9tEr64z.js";import{B as F}from"./Button-D6SK2KLv.js";import{L as t}from"./Label-B2dU-Foq.js";import{S as b}from"./Section-5zw9Z7q2.js";import{T as o}from"./TextField-B5nPgsPB.js";import{F as p,t as S}from"./Field-DTxkV_LC.js";import{s as h}from"./Action-BlB31QBr.js";import{u,F as c}from"./Form-BfgXYtPL.js";import{F as B}from"./FieldError-COJQpxO2.js";import{R as x}from"./ResetButton-3SEBVdnD.js";import{S as f}from"./SubmitButton-BPi9gjAx.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B_nxzmOn.js";import"./flowComponent-Ds2Zpckn.js";import"./index-BvD-rn0f.js";import"./clsx-B-dksMZM.js";import"./index-BkQRYDSQ.js";import"./getActionGroupSlot-BcOhbfZF.js";import"./useStatic-BdnZkR9g.js";import"./IconChevronDown-CArgk7t7.js";import"./remote-Dsm2RjO6.js";import"./IconX-CHnO5RjF.js";import"./IconCheck-ScVw6CHm.js";import"./Text-BUGgmeAk.js";import"./browser-GRuvXKoj.js";import"./EmulatedBoldText-Bu7fFWiW.js";import"./Text-DHURGNQD.js";import"./utils-DFqauJju.js";import"./LoadingSpinner-BQ76BTg3.js";import"./ariaLive-QI1POo56.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-JxxzEpeY.js";import"./context-D7OeR9su.js";import"./Button-6QRSCQME.js";import"./ProgressBar-CO9uG_4l.js";import"./Label-CKDZcwiZ.js";import"./Hidden-C5gaELfT.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Zu9XfwEA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-5FukuHow.js";import"./useFocus-B1cKxXv-.js";import"./useFocusRing-Bftxxd_V.js";import"./useFocusable-RbNM5_qn.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-CuOhHuwr.js";import"./lib-90ocxLs-.js";import"./Dialog-DXKvHJZX.js";import"./RSPContexts-xpSy9BW_.js";import"./OverlayArrow-CpBfJzRQ.js";import"./useControlledState-DnOVZzTA.js";import"./Collection-BflGVmPS.js";import"./CollectionBuilder-D_O-sn_C.js";import"./SelectionIndicator-C8D-p8dY.js";import"./Separator-D5lpfI0l.js";import"./SelectionManager-B3HFpuo-.js";import"./useEvent-CecaYo_j.js";import"./useCollator-BDv8d74S.js";import"./FocusScope-ClGhoguJ.js";import"./VisuallyHidden-DF-QcwIB.js";import"./TextFieldBase-DpdekzGl.js";import"./FieldDescription-C_2F70ew.js";import"./useFieldComponent-BRIXb0CQ.js";import"./TextField-CeQYd3lk.js";import"./FieldError-D1TN1uH_.js";import"./Form-DJAYx_sb.js";import"./Group-BpFeMFVu.js";import"./Input-rZfax9iy.js";import"./useTextField-Cj_XPZw1.js";import"./useFormReset-BXb8b3rI.js";import"./useFormValidation-D4H7vgpB.js";import"./useControlledHostValueProps-BeTsIibq.js";import"./context-Cc_BWEb7.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-Dkbk0FFN.js";import"./useRef-BKT5_v6o.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const n=async m=>{await h(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:n,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
