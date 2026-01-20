import{j as r,r as x}from"./iframe-Q1VSciNm.js";import{b as a,u as p,F as d,t as j}from"./Form-By36tU3G.js";import{L as t}from"./Label-CSNGUTYQ.js";import{R as u,S as F}from"./ResetButton-C1v5iCxV.js";import{B as l}from"./Button-BkL5LUHK.js";import{S as b}from"./Section-vwMkFMln.js";import{A as E}from"./ActionGroup-BD4CHJoH.js";import{s as c}from"./Action-DYNAwBsP.js";import{L as S}from"./DateInput-CWtBTFz-.js";import{T as o}from"./TimeField-CyeIxRzf.js";import{F as T}from"./FieldError-RY9dMzjY.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-3r4dJt.js";import"./flowComponent-CPW7r7fk.js";import"./index-CfXDE0zj.js";import"./clsx-B-dksMZM.js";import"./index-C3b6LhZY.js";import"./useLocalizedStringFormatter-CLD0dVJV.js";import"./context-BLO98TmC.js";import"./browser-DUAAaQNQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-DHpNBk6c.js";import"./utils-Cfx54F97.js";import"./Hidden-XjRrgtIh.js";import"./useRef-CjXrhFY-.js";import"./IconWarning-Bp2wXPUs.js";import"./remote-B8jFwJ6r.js";import"./Text-1lLVDQct.js";import"./EmulatedBoldText-Bq17Dbi4.js";import"./Text-FwHfWGj4.js";import"./LoadingSpinner-CTh5kqiZ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-42pr8eMu.js";import"./ProgressBar-BibYjS7R.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-B4QM81Mz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CkY15rDX.js";import"./useFocus-Dgy1zF73.js";import"./useFocusRing-oK86YNHq.js";import"./useFocusable-BFiW_6Mc.js";import"./ContextMenuSection-DbRI5vVv.js";import"./Dialog-ib05FTRH.js";import"./RSPContexts-MtiuAHte.js";import"./OverlayArrow-vyusEtHs.js";import"./useControlledState-Cr50bzxN.js";import"./Collection-Dj4b01oP.js";import"./CollectionBuilder-D4fjBWoV.js";import"./SelectionIndicator-BJwzvmKN.js";import"./Separator-C0Z-5W1p.js";import"./SelectionManager-QcgbohAp.js";import"./useEvent-B6bvG52n.js";import"./useCollator-Dn5lVtzm.js";import"./FocusScope-BLxdUf1u.js";import"./VisuallyHidden-btJzxMJm.js";import"./getActionGroupSlot-gyV-83t6.js";import"./useStatic-DcS9SWFS.js";import"./context-xTt93I09.js";import"./FieldError-QjdNZ-FN.js";import"./Form-rX7Gw7MM.js";import"./Group-CKcbXsxe.js";import"./Input-a5vdzoE4.js";import"./useFormValidation-DIYVKRGL.js";import"./useFormReset-C0YD-aRq.js";import"./useSpinButton-BLgRyvSd.js";import"./useFilter-Cp03qGtR.js";import"./useFieldComponent-1pDy4PKz.js";import"./AlertText-D1OEnaPR.js";import"./AlertIcon-C25ddq9s.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,g=B("submit"),Cr={title:"Integrations/React Hook Form/TimeField",component:a,render:()=>{const e=async h=>{await c(1500),g(h)},f=p({defaultValues:{timeDefaultValue:new S(16,0)}}),n=j();return r.jsx(d,{form:f,onSubmit:e,children:r.jsxs(b,{children:[r.jsx(n,{name:"time",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx(n,{name:"timeRequired",rules:{required:"Please enter a time"},children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(E,{children:[r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},i={},m={render:()=>{const e=p();return x.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Time"}),r.jsx(T,{children:"ErrorFromOuterFieldError!"})]})]})}},s={render:()=>{const e=p();return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"text",children:r.jsx(o,{children:r.jsx(t,{children:"Time"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(l,{onPress:()=>e.setError("text",{type:"required",message:"ErrorFromForm"},{shouldFocus:!0}),children:"err through form"}),r.jsx(l,{onPress:()=>e.setFocus("text"),children:"focus through form"}),r.jsx(u,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:"{}",...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <TimeField isInvalid>
          <Label>Time</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </TimeField>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"}>
          <TimeField>
            <Label>Time</Label>
          </TimeField>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "ErrorFromForm"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <ResetButton>Reset</ResetButton>
        <SubmitButton>Submit</SubmitButton>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};const Gr=["Default","WithFieldError","WithFocus"];export{i as Default,m as WithFieldError,s as WithFocus,Gr as __namedExportsOrder,Cr as default};
