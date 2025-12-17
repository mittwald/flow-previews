import{j as r,r as g}from"./iframe-BrERPjH0.js";import{u as c,F as d}from"./Form-Ac1Oeg88.js";import{t as b,F as h}from"./Field-BqYTgjZG.js";import{B as f}from"./Button-BwrtrMsn.js";import{S as E}from"./Section-B3CMEqO8.js";import{A as T}from"./ActionGroup-1iai0086.js";import{s as u}from"./Action-ChQTmQoz.js";import{A as i}from"./Autocomplete-D53BlA0a.js";import{L as p}from"./Label-CrwXzsx_.js";import{T as l}from"./TextField-Dw8JMGf1.js";import{O as B}from"./Option-BFohHP6i.js";import{F as A}from"./FieldError-H2u6oDij.js";import{R as F}from"./ResetButton-A6e9JqB9.js";import{S as x}from"./SubmitButton-CrVj9caF.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-YFSmfPOL.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-D7aVmIf6.js";import"./flowComponent-B5K74hVz.js";import"./index-AmygQZwT.js";import"./clsx-B-dksMZM.js";import"./index-DzMVKTvo.js";import"./useLocalizedStringFormatter-CF-Xe2GT.js";import"./context-DvwVEH9h.js";import"./IconChevronDown-BEw7wgap.js";import"./remote-Fny-y5bx.js";import"./IconX-w5i2HL6_.js";import"./IconCheck-CYohvaRX.js";import"./Text-Bge3UWaD.js";import"./EmulatedBoldText-ihVL4TkF.js";import"./Text-CFQd4N__.js";import"./utils-DSRl4UW4.js";import"./LoadingSpinner-BnJ91rtd.js";import"./ariaLive-B0H2MtNq.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DaDxLfby.js";import"./ProgressBar-DcK7zEgl.js";import"./Label-D4vlL-gU.js";import"./Hidden-BAsL4qfb.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CWOKZ_16.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CXQYTWPh.js";import"./useFocus-BqH6bZyL.js";import"./useFocusRing-KYw8u7bF.js";import"./useFocusable-_eZhQVeM.js";import"./ContextMenuSection-J2h9Z88g.js";import"./lib-90ocxLs-.js";import"./Dialog-ByWgeyFx.js";import"./RSPContexts-BfqcGdFg.js";import"./OverlayArrow-gzfZyYcK.js";import"./useControlledState-C9HQthZh.js";import"./Collection-DiqnNJRv.js";import"./CollectionBuilder-DEDtg1Nu.js";import"./SelectionIndicator-Dsdfq8iX.js";import"./Separator-CjZ5Wt-Y.js";import"./SelectionManager-BZAXigYb.js";import"./useEvent-CWpAuNO7.js";import"./useCollator-oX0awY0e.js";import"./FocusScope-BjIKDCVD.js";import"./VisuallyHidden-BT85nAIH.js";import"./getActionGroupSlot-BcecKfQ6.js";import"./useStatic-DyRcj1Uc.js";import"./context-kHaIXrog.js";import"./useFieldComponent-WOZCxk1N.js";import"./useFilter-Fsue7jHv.js";import"./useOverlayController-B5SJ3UbO.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-Cd5uGALe.js";import"./FieldDescription-6rmHkF1O.js";import"./TextField-B3yTMFEr.js";import"./FieldError-DI8l-yzx.js";import"./Form-CRLN4oBl.js";import"./Group-D-Zc97xh.js";import"./Input-D0yPZXTG.js";import"./useTextField-BeG6791T.js";import"./useFormReset-Bw5L0YJo.js";import"./useFormValidation-sc5NnAzh.js";import"./useControlledHostValueProps-cnkiYDDE.js";import"./Popover-rrZDRUOl.js";import"./OverlayContextProvider-Br7VoKzI.js";import"./ListBox-5zvXyI79.js";import"./DragAndDrop-BSPZS_19.js";import"./inertValue-CwHF2jqe.js";import"./useListState-CurzIMbv.js";import"./IconDanger-CeY6S6MU.js";import"./useRef-ohG7iErY.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
