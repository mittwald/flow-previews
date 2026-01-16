import{j as r,r as g}from"./iframe-D2BYf5-g.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-DPWsTLOz.js";import{B as f}from"./Button-CDOjETwV.js";import{S as E}from"./Section-CgYlTnFa.js";import{A as T}from"./ActionGroup-yMuyuUpS.js";import{s as u}from"./Action-DS_mMLiR.js";import{A as i}from"./Autocomplete-BVWbFL_1.js";import{L as p}from"./Label-DC-_uf6W.js";import{T as l}from"./TextField-Y36l2zrQ.js";import{O as B}from"./Option-DNxax0r0.js";import{F as A}from"./FieldError-DX5_shM3.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-DsmNOmMb.js";import"./flowComponent-CbIDm01r.js";import"./index-CRlONQd4.js";import"./clsx-B-dksMZM.js";import"./index-Bu8wVR5j.js";import"./useLocalizedStringFormatter-C9QysfdO.js";import"./context-DWMR9XE1.js";import"./useRef-Ce_-lwau.js";import"./utils-DHZ51AFQ.js";import"./ButtonView-DYIjeFD7.js";import"./browser-CRHYBb-w.js";import"./IconWarning-BvAkc2LD.js";import"./remote-C9AuEG_9.js";import"./Text-D6N8Heh9.js";import"./EmulatedBoldText-BewoRcqC.js";import"./Text-Dog52uMi.js";import"./LoadingSpinner-C5GJ3M9d.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DuBdlowL.js";import"./ProgressBar-BjN-i_wE.js";import"./Label-Be_gFKko.js";import"./Hidden-CfpJTou_.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtwWh7yV.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-wVuL2i-g.js";import"./useFocus-ORvRv07U.js";import"./useFocusRing-DGJLUvQM.js";import"./useFocusable-BL0hS6to.js";import"./ContextMenuSection-CMECFzdV.js";import"./Dialog-DmGaLGl4.js";import"./RSPContexts-Jo-zwAyH.js";import"./OverlayArrow-BMVG_KsN.js";import"./useControlledState-fyUF26L0.js";import"./Collection-DwLf4j5H.js";import"./CollectionBuilder-BdJbggOI.js";import"./SelectionIndicator-BJ_6aDpT.js";import"./Separator-C-Im4RIH.js";import"./SelectionManager-C2d-TWlq.js";import"./useEvent-CvRwCHkk.js";import"./useCollator-BK0Pw3vX.js";import"./FocusScope-4_J7OwCf.js";import"./VisuallyHidden-DcwEctQc.js";import"./getActionGroupSlot-DYtozdko.js";import"./useStatic-DA3fGq-b.js";import"./context-DatNKEIi.js";import"./useOverlayController-CdWYn5_T.js";import"./useFieldComponent-BFOdLrJ8.js";import"./useFilter-aHe2deqD.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BcpGAk-Y.js";import"./FieldDescription-BThX7255.js";import"./TextField-nOc8ZFrV.js";import"./FieldError-RWcRHk2C.js";import"./Form-DfX8wS-B.js";import"./Group-CFjwdlwi.js";import"./Input-CmZkYsGH.js";import"./useTextField-CeRk65Nm.js";import"./useFormReset-Dqz1EECq.js";import"./useFormValidation-BTfq9KBg.js";import"./useControlledHostValueProps-BRzzD23P.js";import"./Popover-xYzPuiR6.js";import"./OverlayContextProvider-ddiXR-PL.js";import"./ListBox-CCmI6jvc.js";import"./DragAndDrop-BxQ4npHV.js";import"./inertValue-B2UbEikH.js";import"./useListState-Ch6U3Dna.js";import"./AlertText-Ds9fEZFP.js";import"./AlertIcon-LWJoxW2P.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const te=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,te as __namedExportsOrder,ee as default};
