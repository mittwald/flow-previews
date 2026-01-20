import{j as r,r as F}from"./iframe-Q1VSciNm.js";import{b as p,u as d,F as l,t as j}from"./Form-By36tU3G.js";import{L as o}from"./Label-CSNGUTYQ.js";import{R as h,S as x}from"./ResetButton-C1v5iCxV.js";import{B as c}from"./Button-BkL5LUHK.js";import{S as g}from"./Section-vwMkFMln.js";import{A as b}from"./ActionGroup-BD4CHJoH.js";import{s as u}from"./Action-DYNAwBsP.js";import{d as E}from"./dummyText-CX_I_Wpl.js";import{T as t}from"./TextArea-CgIc7hkg.js";import{F as S}from"./FieldError-RY9dMzjY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3r4dJt.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./clsx-B-dksMZM.js";import"./index-C3b6LhZY.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./browser-DUAAaQNQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DHpNBk6c.js";import"./utils-Cfx54F97.js";import"./Hidden-XjRrgtIh.js";import"./useRef-CjXrhFY-.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./Text-1lLVDQct.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-42pr8eMu.js";import"./ProgressBar-BibYjS7R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CkY15rDX.js";import"./useFocus-Dgy1zF73.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./ContextMenuSection-DbRI5vVv.js";import"./Dialog-ib05FTRH.js";import"./RSPContexts-MtiuAHte.js";import"./OverlayArrow-vyusEtHs.js";import"./useControlledState-Cr50bzxN.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./useCollator-Dn5lVtzm.js";import"./FocusScope-BLxdUf1u.js";import"./VisuallyHidden-btJzxMJm.js";import"./getActionGroupSlot-gyV-83t6.js";import"./useStatic-DcS9SWFS.js";import"./context-xTt93I09.js";import"./TextFieldBase-6-BmyDS9.js";import"./FieldDescription-CuqQgw1Y.js";import"./useFieldComponent-1pDy4PKz.js";import"./TextField-DJTUJYn-.js";import"./FieldError-QjdNZ-FN.js";import"./Form-rX7Gw7MM.js";import"./Group-CKcbXsxe.js";import"./Input-a5vdzoE4.js";import"./useTextField-DunWRHOY.js";import"./useFormReset-C0YD-aRq.js";import"./useFormValidation-DIYVKRGL.js";import"./useControlledHostValueProps-Np1uUgIf.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,y=B("submit"),Kr={title:"Integrations/React Hook Form/TextArea",component:p,render:()=>{const s=async f=>{await u(1500),y(f)},e=d({defaultValues:{message:"",messageDefaultValue:E.medium,messageRequired:"",messageMaxLength:""}}),i=j();return r.jsx(l,{form:e,onSubmit:s,children:r.jsxs(g,{children:[r.jsx(i,{name:"message",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageDefaultValue",children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageRequired",rules:{required:"Please enter your message"},children:r.jsx(t,{children:r.jsx(o,{children:"Message"})})}),r.jsx(i,{name:"messageMaxLength",children:r.jsx(t,{maxLength:100,showCharacterCount:!0,children:r.jsx(o,{children:"Message"})})}),r.jsxs(b,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},n={render:s=>{const e=d();return F.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsxs(t,{isInvalid:!0,children:[r.jsx(o,{children:"Field"}),r.jsx(S,{children:"ErrorFromOuterFieldError!"})]})]})}},a={render:s=>{const e=d();return r.jsxs(l,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(p,{name:"field",children:r.jsx(t,{...s,children:r.jsx(o,{children:"Field"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
        </Field>
        <TextArea isInvalid>
          <Label>Field</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TextArea>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <TextArea {...props}>
            <Label>Field</Label>
          </TextArea>
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
}`,...a.parameters?.docs?.source}}};const Nr=["Default","WithFieldError","WithFocus"];export{m as Default,n as WithFieldError,a as WithFocus,Nr as __namedExportsOrder,Kr as default};
