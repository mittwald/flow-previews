import{j as r,r as g}from"./iframe-UtMdsYXa.js";import{u as c,F as d}from"./Form-Dg4JPE9c.js";import{t as b,F as h}from"./Field-CMF5jS4o.js";import{B as f}from"./Button-pSxy78IN.js";import{S as E}from"./Section-SYRWIowM.js";import{A as T}from"./ActionGroup-DZyBNkn6.js";import{s as u}from"./Action-BA-MmHGl.js";import{A as i}from"./Autocomplete-BRStt2bq.js";import{L as p}from"./Label-CXp4zhoD.js";import{T as l}from"./TextField-BjliSP6Y.js";import{O as B}from"./Option-v-J0AT0a.js";import{F as A}from"./FieldError-BmlJMAuy.js";import{R as F}from"./ResetButton-B0bE7Gvr.js";import{S as x}from"./SubmitButton-uCsSnl3l.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DFxdAZBn.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-JAnuGjI7.js";import"./flowComponent-CF2d_4jg.js";import"./index-CpvR74kY.js";import"./clsx-B-dksMZM.js";import"./index-BrcrHHEG.js";import"./useLocalizedStringFormatter-BRizf_XS.js";import"./context-BpPaGDcf.js";import"./IconChevronDown-DitnVNWB.js";import"./remote-YAokn8An.js";import"./IconX-DVdUYCtj.js";import"./IconCheck-Bw85iPm6.js";import"./Text-TG940Z8h.js";import"./EmulatedBoldText-CWBgkHDb.js";import"./Text-3HTz8ZLb.js";import"./utils-43m9YPYy.js";import"./LoadingSpinner-AaC_xRXA.js";import"./ariaLive-K_SPQRtg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DZZrikYU.js";import"./ProgressBar-BxQgVB3L.js";import"./Label-GMp5wGdV.js";import"./Hidden-Bs3uTZuz.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CtsciHmS.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-NZb7prl9.js";import"./useFocus-BaPf3vXr.js";import"./useFocusRing-C5G5IFoS.js";import"./useFocusable-DoTzQtzG.js";import"./ContextMenuSection-JK-KhABs.js";import"./lib-90ocxLs-.js";import"./Dialog-BGnO5-Kp.js";import"./RSPContexts-CAfmMSBB.js";import"./OverlayArrow-DHpPSdaa.js";import"./useControlledState-DYYNjqGW.js";import"./Collection-5zvqan3L.js";import"./CollectionBuilder-D_G3_Vuz.js";import"./SelectionIndicator-D63gvTNu.js";import"./Separator-BuVWMkAV.js";import"./SelectionManager-DB_XnTm4.js";import"./useEvent-CJ7SBUWT.js";import"./useCollator-BSunnwIT.js";import"./FocusScope-ZZQ9tzAD.js";import"./VisuallyHidden-DNcxVgpY.js";import"./getActionGroupSlot-COea1xII.js";import"./useStatic-CvZMYmSw.js";import"./context-BLALRgjO.js";import"./useFieldComponent-CylG0yj1.js";import"./useFilter-Dl0lGZD4.js";import"./useOverlayController-BCXLE78B.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CZejro47.js";import"./FieldDescription-CycxOvY5.js";import"./TextField-S28yS2Ng.js";import"./FieldError-BkBhZCre.js";import"./Form-47Gl7tXu.js";import"./Group-DduxZHYS.js";import"./Input-CzvnxGbl.js";import"./useTextField-CdhqVKev.js";import"./useFormReset-ZjFHD53Q.js";import"./useFormValidation-BfzGcjKC.js";import"./useControlledHostValueProps-B7T2q5Ai.js";import"./Popover-ClMUWpbW.js";import"./OverlayContextProvider-WN6o_2cy.js";import"./ListBox-QyF5p4Jl.js";import"./DragAndDrop-DWfsNV27.js";import"./inertValue-D9-GrNw7.js";import"./useListState-DHYicig1.js";import"./IconDanger-hxBcn6Cd.js";import"./useRef-CBpIY8Vw.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const pe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,pe as __namedExportsOrder,ne as default};
