import{j as e,r as E}from"./iframe-D0TBPZEN.js";import{A as j}from"./ActionGroup-DugK52bR.js";import{B as F}from"./Button-KdCw7j9H.js";import{L as t}from"./Label-CR6zfnlP.js";import{S as b}from"./Section-BKdAPH38.js";import{T as o}from"./TextField-DLOp-9Pv.js";import{F as p,t as S}from"./Field-B0iwKt_M.js";import{s as h}from"./Action-CXRsCf2v.js";import{u,F as c}from"./Form-Btk2VmlI.js";import{F as B}from"./FieldError-DRFaZQOT.js";import{R as x}from"./ResetButton-BMWoklq9.js";import{S as f}from"./SubmitButton-DrlRVWqt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CjDg1E9a.js";import"./flowComponent-BJZeh5dT.js";import"./index-BDPp8Owz.js";import"./clsx-B-dksMZM.js";import"./index-Cimb1y_J.js";import"./getActionGroupSlot-5-XTFZFu.js";import"./useStatic-DuuDvcGk.js";import"./IconChevronDown-Bbj4kj6E.js";import"./remote-Dx3xetcp.js";import"./IconX-CN6PeFmZ.js";import"./IconCheck-BEy8YdgR.js";import"./Text-eR7t4eab.js";import"./browser-BxCdUhN6.js";import"./EmulatedBoldText-D0EAgwUh.js";import"./Text-CculVWnY.js";import"./utils-D99Vyo1b.js";import"./LoadingSpinner-DmqGaBhS.js";import"./ariaLive-BIzH68Db.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-PXbfbnRK.js";import"./context-qsxormAC.js";import"./Button-DCdA3b5l.js";import"./ProgressBar-NoiT46hC.js";import"./Label-B3MDDK1W.js";import"./Hidden-BgnID2na.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BXxZPVNQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Ccmkzzzz.js";import"./useFocus-DX98yPkU.js";import"./useFocusRing-BVlc85iC.js";import"./useFocusable-BcHjS_A6.js";import"./Label.module-CUYTf9Jc.js";import"./ContextMenuSection-BFdR_fJ6.js";import"./lib-90ocxLs-.js";import"./Dialog-iVAnmgSo.js";import"./RSPContexts-CV0e_82S.js";import"./OverlayArrow-CuTWjvt2.js";import"./useControlledState-3iFUkpdV.js";import"./Collection-CLyoYIQ6.js";import"./CollectionBuilder-Dei-INuS.js";import"./SelectionIndicator-BBQRBzIb.js";import"./Separator-Cr3smolU.js";import"./SelectionManager-B6gd3fvk.js";import"./useEvent-pwKWzrmw.js";import"./useCollator-CtMATBZL.js";import"./FocusScope-CRIWFmvd.js";import"./VisuallyHidden-C_1XSOyM.js";import"./TextFieldBase-CJOC0Fy0.js";import"./FieldDescription-DEgmMoME.js";import"./useFieldComponent-DYlCWX6Y.js";import"./TextField-CkZ4UrnV.js";import"./FieldError-Cjpxpmri.js";import"./Form-D2JDP56m.js";import"./Group-C6ggJjLc.js";import"./Input-PPWc-_80.js";import"./useTextField-D7lDzWg0.js";import"./useFormReset-VuRi1k16.js";import"./useFormValidation-RMTjWMUG.js";import"./useControlledHostValueProps-BdlOn5qd.js";import"./context-Dojx0CKD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconDanger-CMO1pm9n.js";import"./useRef-CJ17_AT7.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,g=y("submit"),Ye={title:"Integrations/React Hook Form/TextField",component:p,render:()=>{const n=async m=>{await h(1500),g(m)},r=u({defaultValues:{name:"",nameDefaultValue:"John",nameRequired:"",nameMaxLength:"",controlledName:"",nameMinLength:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameDefaultValue",children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameRequired",rules:{required:"Please enter your name"},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMaxLength",children:e.jsx(o,{maxLength:10,showCharacterCount:!0,children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"controlledName",children:e.jsx(o,{value:r.watch("controlledName").toUpperCase(),children:e.jsx(t,{children:"Name"})})}),e.jsx(i,{name:"nameMinLength",rules:{required:"Please enter your name",minLength:2},children:e.jsx(o,{children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},s={},a={render:()=>{const n=m=>{g(m)},r=u({defaultValues:{name:""}}),i=S();return e.jsx(c,{form:r,onSubmit:n,children:e.jsxs(b,{children:[e.jsx(i,{name:"name",children:e.jsx(o,{value:r.watch("name"),onChange:m=>{r.setValue("name",m.toUpperCase())},children:e.jsx(t,{children:"Name"})})}),e.jsxs(j,{children:[e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})]})})}},l={render:()=>{const n=u();return E.useEffect(()=>{n.setError("field",{type:"required",message:"ErrorFromForm"})},[]),e.jsxs(c,{form:n,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{children:e.jsx(t,{children:"Field"})})}),e.jsxs(o,{isInvalid:!0,children:[e.jsx(t,{children:"Field"}),e.jsx(B,{children:"ErrorFromOuterFieldError!"})]})]})}},d={render:n=>{const r=u();return e.jsxs(c,{form:r,onSubmit:async()=>await h(2e3),children:[e.jsx(p,{name:"field",children:e.jsx(o,{...n,type:"email",inputMode:"email",children:e.jsx(t,{children:"Field"})})}),e.jsx("div",{style:{marginBottom:"2200px"}}),e.jsx(F,{onPress:()=>r.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),e.jsx(F,{onPress:()=>r.setFocus("field"),children:"focus through form"}),e.jsx(x,{children:"Reset"}),e.jsx(f,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
