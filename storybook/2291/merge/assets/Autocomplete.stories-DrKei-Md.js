import{j as r,r as g}from"./iframe-BIoFjWpr.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-MQWJL61W.js";import{B as f}from"./Button-60lZfz3H.js";import{S as E}from"./Section-DckT0YJI.js";import{A as T}from"./ActionGroup-BEBqOCwY.js";import{s as u}from"./Action-CpJIOnVf.js";import{A as i}from"./Autocomplete-DkSUXykW.js";import{L as p}from"./Label-D-wfWBos.js";import{T as l}from"./TextField-B8opd3tm.js";import{O as B}from"./Option-CJNyScSh.js";import{F as A}from"./FieldError-CY5Rdgwt.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BzebB2lX.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./clsx-B-dksMZM.js";import"./index-h2cI_GQ2.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./context-CeBhVpDW.js";import"./useRef-DU35bVT5.js";import"./utils-DZ7CVsEQ.js";import"./ButtonView-D8SKXTBC.js";import"./browser-BAGCYS_p.js";import"./IconWarning-EC1k16Yv.js";import"./remote-CdlQwHLV.js";import"./Text-Dw86EjFX.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9bxiqwiQ.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-Uox4pFjd.js";import"./useFocus-CQPopARV.js";import"./useFocusRing-C05eNqGk.js";import"./useFocusable-CwNae-cD.js";import"./ContextMenuSection-D04Tf7Yh.js";import"./Dialog-khxuiED6.js";import"./RSPContexts-TtAa_5CI.js";import"./OverlayArrow-BK2hFoQS.js";import"./useControlledState-A9PECuda.js";import"./Collection-aRoAI_rd.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./SelectionIndicator-DDosGdOa.js";import"./Separator-CBKzJJ-r.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./VisuallyHidden-iLNm3MD9.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./useStatic-BOUdEr4J.js";import"./context-Bujl8L45.js";import"./useOverlayController-OHHrE_gT.js";import"./useFieldComponent-DpF862rt.js";import"./useFilter-DCR2CGO3.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-DbQDLAPx.js";import"./FieldDescription-CmT-44YL.js";import"./TextField-D2l0jW9W.js";import"./FieldError-3U-LgGLS.js";import"./Form-BlXCmAsm.js";import"./Group-kc9AGw0Y.js";import"./Input-D2aCw11E.js";import"./useTextField-BXYStOBz.js";import"./useFormReset-DTiYdK4X.js";import"./useFormValidation-5Xewoqko.js";import"./Popover-BZLukQkr.js";import"./OverlayContextProvider-BXZ1bgu-.js";import"./ListBox-CvCGfFsS.js";import"./DragAndDrop-CWJwl0mV.js";import"./inertValue-VB_Xuk32.js";import"./useListState-0Nu1VAUd.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ee=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ee as __namedExportsOrder,re as default};
