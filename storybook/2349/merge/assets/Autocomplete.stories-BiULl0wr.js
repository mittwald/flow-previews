import{r as g,j as r}from"./iframe-gtGtPSGX.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-B2s8Dmn4.js";import{B as f}from"./Button-CvhKZeTQ.js";import{S as E}from"./Section-BQknUcw4.js";import{A as T}from"./ActionGroup-CLeHwFAs.js";import{s as u}from"./ActionBatch-C6WY1Daf.js";import{A as i}from"./Autocomplete-24s8CPk5.js";import{L as p}from"./Label-ezDYxAqR.js";import{T as l}from"./TextField-Bb9Zb86M.js";import{O as B}from"./Option-cR4oWmUH.js";import{F as A}from"./FieldError-co03Ctd_.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CLlIyxqz.js";import"./flowComponent-BXctKB_l.js";import"./index-D4jcCax4.js";import"./clsx-B-dksMZM.js";import"./index-CkPgzcm3.js";import"./useLocalizedStringFormatter-BxxPIcIh.js";import"./context-B_6Y7rB4.js";import"./ActionGroupView-D0kXKbJs.js";import"./Content-BghcAC3J.js";import"./Heading-DqsWSEZ3.js";import"./Heading-BlK6Cy5i.js";import"./RSPContexts-L8MWaJ6n.js";import"./utils-1b_KoCGs.js";import"./Text-QzTdDFQg.js";import"./browser-BLXRbgM1.js";import"./EmulatedBoldText-Cj02Cwni.js";import"./Text-B8kBB-Il.js";import"./Modal-d042eYeA.js";import"./useOverlayController-ljUuhRV3.js";import"./useStatic-CcUMZ2Ma.js";import"./Overlay-CLrFplCq.js";import"./OverlayContextProvider-BlsD-E7F.js";import"./LoadingSpinner-DnqSg6_k.js";import"./IconWarning-BtUUciVj.js";import"./remote-DGcAtBID.js";import"./Dialog-_BBlF040.js";import"./Button-Bw2A7mA1.js";import"./ProgressBar-D4vmn95_.js";import"./Label-Ca_2SnGY.js";import"./Hidden-DP7zwehU.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BqGs6HWh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-ub7fcIm5.js";import"./useFocus-BGYZap87.js";import"./useFocusRing-jJpNIKKF.js";import"./useFocusable-uEYYPBvA.js";import"./OverlayArrow-D9TvGvP1.js";import"./useControlledState-a_M_Sxv2.js";import"./Collection-B35z872H.js";import"./CollectionBuilder-BwhyDG2L.js";import"./SelectionIndicator-DuOMWJ4l.js";import"./Separator-WOt-iCvu.js";import"./SelectionManager-ab1NruD8.js";import"./useEvent-BWe1IiIa.js";import"./useCollator-C3hQgpVA.js";import"./FocusScope-d04sRaMv.js";import"./VisuallyHidden-D8bGSG_p.js";import"./ButtonView-VtGuDE6z.js";import"./Flex-D8ogRMIF.js";import"./useRef-IjWKQgTn.js";import"./ContextMenuSection-CDCzjc8m.js";import"./getActionGroupSlot-c8xeMW3D.js";import"./useFieldComponent-BaX-M8wV.js";import"./useFilter-5eACwZ82.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-CP2C8WYU.js";import"./FieldDescription-ClA4Wtvf.js";import"./TextField-BDt0lpmD.js";import"./FieldError-DenhE7nb.js";import"./Form-BRxvySUZ.js";import"./Group-Dg14tYxa.js";import"./Input-1coMMItc.js";import"./useTextField-DQThDcRz.js";import"./useFormReset-TvJ_gIa-.js";import"./useFormValidation-BQy4AKy0.js";import"./Popover-C2tFcXbP.js";import"./ListBox-B-fe95va.js";import"./DragAndDrop-r590xLZL.js";import"./inertValue-C8H6ae2f.js";import"./useListState-CK4Fehto.js";import"./AlertText-BWmstvFc.js";import"./AlertIcon-BrLsNTwF.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),se={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const ne=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,ne as __namedExportsOrder,se as default};
