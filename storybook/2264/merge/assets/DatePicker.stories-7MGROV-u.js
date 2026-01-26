import{j as r,r as j}from"./iframe-CBKKDtut.js";import{b as a,u as p,F as d,t as b}from"./Form-CPgp_8OF.js";import{L as t}from"./Label-YKVXUmct.js";import{R as f,S as h}from"./ResetButton-CJb_sarw.js";import{B as u}from"./Button-B9OQWjLR.js";import{S as E}from"./Section-DXY5zwlF.js";import{A as S}from"./ActionGroup-CTEI8oZ1.js";import{s as c}from"./Action-DoBIVRDz.js";import{I as l,f as D,K as B}from"./DateInput-28dr_VnS.js";import{D as o}from"./DatePicker-BoEzYSRi.js";import{F as g}from"./FieldError-ncR-D_4-.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-C3t3tmF9.js";import"./flowComponent-D-Qq6Xd6.js";import"./index-Q7U-5PA1.js";import"./clsx-B-dksMZM.js";import"./index-fGZr3eAJ.js";import"./useLocalizedStringFormatter-Cg2HsiHj.js";import"./context-Bvh_z46p.js";import"./browser-C9q5kf03.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label.module-CUYTf9Jc.js";import"./Label-BzrfGAM1.js";import"./utils-CzD9rXMA.js";import"./Hidden-BMhHdfnU.js";import"./useRef-DZEwAE_i.js";import"./IconWarning-BGeLtjSH.js";import"./remote-d08GjPRF.js";import"./Text-DXycmlPy.js";import"./EmulatedBoldText-eA5g4YLr.js";import"./Text-BipkjXt2.js";import"./LoadingSpinner-BvfPlxYK.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DyYsKNHg.js";import"./ProgressBar-BptIcMSV.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BGNrCt7d.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CCG6AvGE.js";import"./useFocus-BrZp4zBY.js";import"./useFocusRing-CCYWTYc5.js";import"./useFocusable-DQlHlYMC.js";import"./ContextMenuSection-CIoY6k-y.js";import"./Dialog-DqG8ZP0V.js";import"./RSPContexts-B9p0Af0m.js";import"./OverlayArrow-BBLTZ4Zv.js";import"./useControlledState-1Ujh64WW.js";import"./Collection-Ci7EvgUR.js";import"./CollectionBuilder-BsNn1R8F.js";import"./SelectionIndicator-D8RCowii.js";import"./Separator-CntAjx1Z.js";import"./SelectionManager-DFjBPYMf.js";import"./useEvent-BEHLnBZB.js";import"./useCollator-DdKTTQqQ.js";import"./FocusScope-Ds7_8mr5.js";import"./VisuallyHidden-BTRh3ybS.js";import"./getActionGroupSlot-CKDi87pY.js";import"./useStatic-n8g6U0tI.js";import"./context-B4Ey35Kl.js";import"./FieldError-6zsCD2mI.js";import"./Form-CoRvbdVN.js";import"./Group-CA1lCmka.js";import"./Input-DA2pnuWC.js";import"./useFormValidation-FH2NBgqd.js";import"./useFormReset-tFiefpak.js";import"./useSpinButton-Cu8ofxZd.js";import"./useFilter-CViM8Lc3.js";import"./useFieldComponent-377eOR22.js";import"./Popover-C-P6E-d5.js";import"./useOverlayController-BrNAIcQ_.js";import"./OverlayContextProvider-C-EovWON.js";import"./RangeCalendar-CHdo6QxL.js";import"./Heading-BVbeBqwL.js";import"./useUpdateEffect-1hCees4_.js";import"./AlertText-BqYQV5FR.js";import"./AlertIcon-R8qprUXz.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,y=P("submit"),zr={title:"Integrations/React Hook Form/DatePicker",component:a,render:()=>{const e=async F=>{await c(1500),y(F)},x=p({defaultValues:{dateDefaultValue:l("2025-09-01")}}),i=b();return r.jsx(d,{form:x,onSubmit:e,children:r.jsxs(E,{children:[r.jsx(i,{name:"date",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateDefaultValue",children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateRequired",rules:{required:"Please select a date"},children:r.jsx(o,{children:r.jsx(t,{children:"Date"})})}),r.jsx(i,{name:"dateMinValue",children:r.jsx(o,{minValue:D(B()),children:r.jsx(t,{children:"Future date"})})}),r.jsxs(S,{children:[r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})]})})}},s={},n={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return j.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsxs(o,{isInvalid:!0,children:[r.jsx(t,{children:"Text"}),r.jsx(g,{children:"ErrorFromOuterFieldError!"})]})]})}},m={render:()=>{const e=p({defaultValues:{field:l("2025-09-01")}});return r.jsxs(d,{form:e,onSubmit:async()=>await c(2e3),children:[r.jsx(a,{name:"field",children:r.jsx(o,{children:r.jsx(t,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(u,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(u,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(f,{children:"Reset"}),r.jsx(h,{children:"Submit"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
