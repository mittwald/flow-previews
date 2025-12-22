import{j as r,r as g}from"./iframe-a9513Vq6.js";import{u as c,F as d,t as b,b as h}from"./Form-v8TMyo2H.js";import{R as F,S as x}from"./ResetButton-5AR8fVnz.js";import{B as f}from"./Button-CbZraw7Z.js";import{S as E}from"./Section-C8UMRpV9.js";import{A as T}from"./ActionGroup-CEk1ZVey.js";import{s as u}from"./Action-CS14UEhl.js";import{A as i}from"./Autocomplete-Cd2BqQ_O.js";import{L as p}from"./Label-BZ3qOvYQ.js";import{T as l}from"./TextField-J-kkWp3G.js";import{O as B}from"./Option-BvdLrqFM.js";import{F as A}from"./FieldError-WoUSVR_n.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D7T7LY8j.js";import"./flowComponent-ClX3KjCn.js";import"./index-BqXFMVtG.js";import"./clsx-B-dksMZM.js";import"./index-CgKgRbSB.js";import"./useLocalizedStringFormatter-CqunH7JG.js";import"./context-CGjHIvvu.js";import"./browser-CuCeyixq.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-Q60aVnZq.js";import"./useRef-Do3Y2xpl.js";import"./IconWarning-BPr7HnMX.js";import"./remote-CGHUze9I.js";import"./Text-hxI3a1Rs.js";import"./EmulatedBoldText-mDi0QmS0.js";import"./Text-KDVUHE9w.js";import"./LoadingSpinner-CjOt6fEt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CbYmiDFL.js";import"./ProgressBar-ZGOw6r6D.js";import"./Label-THT_xKrE.js";import"./Hidden-CBXUgXzH.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-nB2pk6qM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CyOdCqvu.js";import"./useFocus-CH_x6C_j.js";import"./useFocusRing-CmMhl12v.js";import"./useFocusable-lL6lq36R.js";import"./ContextMenuSection-BAncSsp2.js";import"./Dialog-C14EYRfp.js";import"./RSPContexts-DpIEdSL7.js";import"./OverlayArrow-BuQIV4ze.js";import"./useControlledState-CemUvUps.js";import"./Collection-D4DMEnaD.js";import"./CollectionBuilder-DV1hsabw.js";import"./SelectionIndicator-ZvhngIUd.js";import"./Separator-CV17wQ8T.js";import"./SelectionManager-CS8x0YuZ.js";import"./useEvent-CPsIFNqP.js";import"./useCollator-BiekIj1S.js";import"./FocusScope-BnHRmLRH.js";import"./VisuallyHidden-C2yGzMiQ.js";import"./getActionGroupSlot-gpXu2eix.js";import"./useStatic-BYKWrdXY.js";import"./context-RLH4ysrR.js";import"./useOverlayController-BK-THQgt.js";import"./useFieldComponent-DoOT3wm0.js";import"./useFilter-BA4Y780e.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-ChofrBCm.js";import"./FieldDescription-B1DZzGI9.js";import"./TextField-C0XDoeam.js";import"./FieldError-C3zvz5gI.js";import"./Form-DpSLYLL6.js";import"./Group-D-ENRzUh.js";import"./Input-CtQP6IcM.js";import"./useTextField-CtFPXen_.js";import"./useFormReset-CYu_Lr-z.js";import"./useFormValidation-vP3SVKb2.js";import"./useControlledHostValueProps-BNY-TyT6.js";import"./Popover-C3epsTXC.js";import"./OverlayContextProvider-BhvlUAAP.js";import"./ListBox-DeYH29f9.js";import"./DragAndDrop--nEbn5fg.js";import"./inertValue-Bz9437Qq.js";import"./useListState-CsCMYbqm.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
