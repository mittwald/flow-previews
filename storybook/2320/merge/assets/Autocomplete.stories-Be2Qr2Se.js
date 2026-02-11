import{r as g,j as r}from"./iframe-BRGIT6aC.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-Q24A8VNC.js";import{B as f}from"./Button-CQ_f9ZVl.js";import{S as E}from"./Section-DEfQkscU.js";import{A as T}from"./ActionGroup-DbWhQ292.js";import{s as u}from"./Action-BloO9QUi.js";import{A as i}from"./Autocomplete-BzoYp8UL.js";import{L as p}from"./Label-DYHgdjdj.js";import{T as l}from"./TextField-CaWcPbzO.js";import{O as B}from"./Option-BbtDGRvv.js";import{F as A}from"./FieldError-BPfKA2u4.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DJEA9S0A.js";import"./flowComponent-gC5J80sd.js";import"./index-DCYGO5ln.js";import"./clsx-B-dksMZM.js";import"./index-CrtVPr5B.js";import"./useLocalizedStringFormatter-CVE6cVib.js";import"./context-C5al0DRJ.js";import"./useRef-BP6FbjN4.js";import"./utils-D-ssFu49.js";import"./ButtonView-Cu_PLq3T.js";import"./browser-BYxlW31W.js";import"./IconWarning-7xibGY50.js";import"./remote-B0Hk_38y.js";import"./Text-RxDad6dn.js";import"./EmulatedBoldText-D5rj6KVU.js";import"./Text-CBpyQBbE.js";import"./LoadingSpinner-BjEAsOxv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BCc16_FM.js";import"./ProgressBar-BPYUxayd.js";import"./Label-Ba69oYDq.js";import"./Hidden-QhxhoagL.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CWpJX9lW.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CGLZGzkl.js";import"./useFocus-Dz-IuM4k.js";import"./useFocusRing-B_bORcJM.js";import"./useFocusable-Bmr3Drft.js";import"./ContextMenuSection-a8sl_NQx.js";import"./Dialog-Bn341bnD.js";import"./RSPContexts-C-qF17sW.js";import"./OverlayArrow-DKDxu5eo.js";import"./useControlledState-C2xaeP2Y.js";import"./Collection-BF4bn4qW.js";import"./CollectionBuilder-DWlQHDS1.js";import"./SelectionIndicator-BbWx7qoh.js";import"./Separator-mcbTnTQA.js";import"./SelectionManager-Ccyvg52a.js";import"./useEvent-C0jUKnCT.js";import"./useCollator-B5DUtkng.js";import"./FocusScope-D2KgIyLw.js";import"./VisuallyHidden-Cs58q5Qj.js";import"./getActionGroupSlot-C3tMCkBR.js";import"./useStatic-3STTURCL.js";import"./context-Dnnfbmmg.js";import"./useOverlayController-BV2mbNRJ.js";import"./useFieldComponent-CMRD4Pyo.js";import"./useFilter-LUL0iR9U.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BPfEHTeU.js";import"./FieldDescription-BhKmM-2J.js";import"./TextField-C-kYnaGH.js";import"./FieldError-f7o5-LTX.js";import"./Form-97YOGsKi.js";import"./Group-COVCD_be.js";import"./Input-CEj_QPsV.js";import"./useTextField-BXyTAsaB.js";import"./useFormReset-CXZmek7W.js";import"./useFormValidation-D-IfNlYy.js";import"./Popover-D5tJ855F.js";import"./OverlayContextProvider-BehX_G0U.js";import"./ListBox-BPSfFLrW.js";import"./DragAndDrop-uw_V3h8K.js";import"./inertValue-Dmb6YpE2.js";import"./useListState-CUMEGLKQ.js";import"./AlertText-Ba5ab3-o.js";import"./AlertIcon-DeOHvzVA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
