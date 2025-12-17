import{j as r,r as g}from"./iframe-DCi2GPXy.js";import{u as c,F as d}from"./Form-BEJ7ZDfr.js";import{B as f}from"./Button-BvlVjfXN.js";import{S as b}from"./Section-DQ10C63T.js";import{A as E}from"./ActionGroup-BxCfhcrh.js";import{s as u}from"./Action-DSvpN5_w.js";import{A as i}from"./Autocomplete-DAmygDEl.js";import{L as p}from"./Label-DgDJIBjn.js";import{T as l}from"./TextField-BwG_auh-.js";import{O as T}from"./Option-33dhbUAB.js";import{F as B}from"./FieldError-CX3tsRfV.js";import{R as h}from"./ResetButton-D6Wzkttq.js";import{t as A,F}from"./Field-DrGuRbFu.js";import{S as x}from"./SubmitButton-jwhLPFJ3.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-rXh1EgRD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C47PaVwm.js";import"./index-59pzPUD3.js";import"./index-DQE0u8UH.js";import"./IconChevronDown-DONjXQZK.js";import"./remote-BdJtJUco.js";import"./IconX-CUolAjX3.js";import"./IconCheck-r8p9jwIL.js";import"./Text-DKbhm8jI.js";import"./EmulatedBoldText-BEONMvy5.js";import"./Text-X37FrECZ.js";import"./utils-vPyJ8qyD.js";import"./LoadingSpinner-Bfzcx181.js";import"./ariaLive-D6Ygf8dg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-D06IazA5.js";import"./context-BTmRaMcH.js";import"./Button-h0z45t9Y.js";import"./ProgressBar-BLHxx7o4.js";import"./Label-DnXzFWpe.js";import"./Hidden-DFhlcUMl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BQBPJRIA.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLUDhytQ.js";import"./useFocus-BbmRhFNN.js";import"./useFocusRing-B2V87-QL.js";import"./useFocusable-DMPmR1e2.js";import"./ContextMenuSection-D110vvwB.js";import"./lib-90ocxLs-.js";import"./Dialog-DTMFojiS.js";import"./RSPContexts-BfriozQD.js";import"./OverlayArrow-V_y0Lk3K.js";import"./useControlledState-BQWMCLKx.js";import"./Collection-hz_GKqMW.js";import"./CollectionBuilder-W8-VoKcj.js";import"./SelectionIndicator-DyawlqQX.js";import"./Separator-YH7DVRXu.js";import"./SelectionManager-BP_CiZbZ.js";import"./useEvent-B4FkGbKp.js";import"./useCollator-CMEuEWKP.js";import"./FocusScope-BD5WMWoq.js";import"./VisuallyHidden-DrUI8NEq.js";import"./dynamic-68RthJrk.js";import"./getActionGroupSlot-7vmQNanS.js";import"./useStatic-jalrqC7_.js";import"./context-sCXpQMxk.js";import"./useFieldComponent-D5bCUPLo.js";import"./useFilter-DQoEhRaW.js";import"./useOverlayController-DBH63_PO.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BTJ2LWsV.js";import"./FieldDescription-CPk3_hJh.js";import"./TextField-DJpGRy0g.js";import"./FieldError-GB-3lq6u.js";import"./Form-Dfwyevmy.js";import"./Group-CUVHCniN.js";import"./Input-mbO-O18b.js";import"./useTextField-BKiVsIjU.js";import"./useFormReset-C2pwuPUB.js";import"./useFormValidation-DJEczJgL.js";import"./useControlledHostValueProps-BzUlSFsd.js";import"./Popover-BnCWtHze.js";import"./OverlayContextProvider-D_GJsvcI.js";import"./ListBox-C3ocqMJK.js";import"./DragAndDrop-Uj4zCCbp.js";import"./inertValue-CU0qBkfs.js";import"./useListState-BAgcUQnG.js";import"./IconDanger-RXl46e71.js";import"./useRef-Bmjm0uMP.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=A(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(E,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
