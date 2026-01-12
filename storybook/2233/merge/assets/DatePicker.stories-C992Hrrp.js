import{j as r,r as j}from"./iframe-DkC9HeFh.js";import{b as a,u as p,F as d,t as b}from"./Form-DFQtf3GU.js";import{L as t}from"./Label-Bmyd95n1.js";import{R as f,S as h}from"./ResetButton-BQqEyyoX.js";import{B as u}from"./Button-B7ieOWfK.js";import{S as E}from"./Section-C5sab7e9.js";import{A as S}from"./ActionGroup-fpt_mN-q.js";import{s as c}from"./Action-BeqMUzE-.js";import{I as l,f as D,K as B}from"./DateInput-DpngTEmA.js";import{D as o}from"./DatePicker-BcDCiqUX.js";import{F as g}from"./FieldError-Dbnkzdo1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDaduNaQ.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./context-FwWFVwDs.js";import"./browser-tA6G_ksz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-Dz_bjD6f.js";import"./utils-CQbe0cgS.js";import"./Hidden-Dt8SDEzH.js";import"./useRef-Bpt1Kr88.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./ContextMenuSection-nkrIclXc.js";import"./Dialog-BJyrAoE0.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./useStatic-8Ma0Gu-h.js";import"./context-Z29bubao.js";import"./FieldError-CNoEBaIo.js";import"./Form-D5R2a4m8.js";import"./Group-C_JnVwTY.js";import"./Input-BPPE0u71.js";import"./useFormValidation-DmYU2vdY.js";import"./useFormReset-BF2XnUgU.js";import"./useSpinButton-CW8JKzfe.js";import"./useFilter-CsYMx8tN.js";import"./useFieldComponent-eCPWR12U.js";import"./Popover-nq4j79nG.js";import"./useOverlayController-CKW4WHoS.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./RangeCalendar-1xRSGEDq.js";import"./Heading-C_Zexpqw.js";import"./useUpdateEffect-CgaDkAwu.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),zr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
        </Field>
        <DatePicker isInvalid>
          <Label>Text</Label>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </DatePicker>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm({
      defaultValues: {
        field: parseDate("2025-09-01")
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <DatePicker>
            <Label>Text</Label>
          </DatePicker>
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
}`,...m.parameters?.docs?.source}}};const Jr=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,Jr as __namedExportsOrder,zr as default};
