import{j as r,r as g}from"./iframe-DkC9HeFh.js";import{u as c,F as d,t as b,b as h}from"./Form-DFQtf3GU.js";import{R as F,S as x}from"./ResetButton-BQqEyyoX.js";import{B as f}from"./Button-B7ieOWfK.js";import{S as E}from"./Section-C5sab7e9.js";import{A as T}from"./ActionGroup-fpt_mN-q.js";import{s as u}from"./Action-BeqMUzE-.js";import{A as i}from"./Autocomplete-n8pG6tFV.js";import{L as p}from"./Label-Bmyd95n1.js";import{T as l}from"./TextField-NmtFv-2L.js";import{O as B}from"./Option-Bw2Bgojt.js";import{F as A}from"./FieldError-Dbnkzdo1.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DDaduNaQ.js";import"./flowComponent-1oYrvkPj.js";import"./index-DvyT4dL7.js";import"./clsx-B-dksMZM.js";import"./index-84tLr-0T.js";import"./useLocalizedStringFormatter-BMEualnj.js";import"./context-FwWFVwDs.js";import"./browser-tA6G_ksz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CQbe0cgS.js";import"./useRef-Bpt1Kr88.js";import"./IconWarning-6DY0-AAa.js";import"./remote-C2KQESr1.js";import"./Text-B-gx4bXK.js";import"./EmulatedBoldText-ubSX6qOz.js";import"./Text-BZKGVCR5.js";import"./LoadingSpinner-lFYILNSp.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-1sEra0ij.js";import"./ProgressBar-CIHpzS8j.js";import"./Label-Dz_bjD6f.js";import"./Hidden-Dt8SDEzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Yk9h4-sj.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-zXWrYZpb.js";import"./useFocus-DkNOoSBL.js";import"./useFocusRing-C9ROKOON.js";import"./useFocusable-CeYJrI7n.js";import"./ContextMenuSection-nkrIclXc.js";import"./Dialog-BJyrAoE0.js";import"./RSPContexts-CKa7E1cC.js";import"./OverlayArrow-BJ-VOV5h.js";import"./useControlledState-Ul0j90Sg.js";import"./Collection-CUZZqAxe.js";import"./CollectionBuilder-C7f0KbGc.js";import"./SelectionIndicator-2dj1bxWN.js";import"./Separator-YXmfk0mZ.js";import"./SelectionManager-ElI-xXNm.js";import"./useEvent-DWxhQQFL.js";import"./useCollator-DUnRWfY0.js";import"./FocusScope-Bsk9Ww9W.js";import"./VisuallyHidden-DWtp1z23.js";import"./getActionGroupSlot-BkxkF0Oa.js";import"./useStatic-8Ma0Gu-h.js";import"./context-Z29bubao.js";import"./useOverlayController-CKW4WHoS.js";import"./useFieldComponent-eCPWR12U.js";import"./useFilter-CsYMx8tN.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Ds1AgYlo.js";import"./FieldDescription-DzNmSyg3.js";import"./TextField-BuskeFhM.js";import"./FieldError-CNoEBaIo.js";import"./Form-D5R2a4m8.js";import"./Group-C_JnVwTY.js";import"./Input-BPPE0u71.js";import"./useTextField-DbxlREwJ.js";import"./useFormReset-BF2XnUgU.js";import"./useFormValidation-DmYU2vdY.js";import"./useControlledHostValueProps-CcqRfY0b.js";import"./Popover-nq4j79nG.js";import"./OverlayContextProvider-6aRE9S_a.js";import"./ListBox-A2IIynfg.js";import"./DragAndDrop-CNbZKBQO.js";import"./inertValue-BJYuDF5h.js";import"./useListState-COtb3n40.js";import"./AlertText-DN8jvMhh.js";import"./AlertIcon-BRQK8hpu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
        </Field>
        <Autocomplete {...props}>
          <TextField isInvalid>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <Autocomplete {...props}>
            <TextField>
              <Label>Test</Label>
            </TextField>
            {generateFromString(fieldValue)}
          </Autocomplete>
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,oe as __namedExportsOrder,te as default};
