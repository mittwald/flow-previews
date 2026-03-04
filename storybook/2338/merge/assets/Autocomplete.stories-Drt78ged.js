import{r as E,j as r}from"./iframe-CEWg6_IX.js";import{u as c,F as d,a as h,R as F,S as x,t as y}from"./ResetButton-C4Ep7Det.js";import{B as f}from"./Button-CA6AkUR_.js";import{S as j}from"./Section-smxk9QAc.js";import{A as S}from"./ActionGroup-2A27ggL_.js";import{s as u}from"./ActionBatch-CnX-7Tzc.js";import{A as i}from"./Autocomplete-7AQ2f4k5.js";import{L as a}from"./Label-BaJSnICs.js";import{T as l}from"./TextField-DKH0rH4c.js";import{O as T}from"./Option-BkSqhRde.js";import{F as A}from"./FieldError-fCgHoEMk.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-JOnDgprM.js";import"./flowComponent-BozMiJR4.js";import"./index-CBGYsq4Q.js";import"./clsx-B-dksMZM.js";import"./index-BYd0o8d1.js";import"./useLocalizedStringFormatter-qldlgSmA.js";import"./context-BwTFrxK2.js";import"./ActionGroupView-oC77FUWd.js";import"./Content-CRiMoq0F.js";import"./Heading-BWEcB93I.js";import"./Heading-Nh2qIPHf.js";import"./RSPContexts-ulpMISZ-.js";import"./utils-VWmQzJjV.js";import"./Text-Bw_cIJde.js";import"./browser-D6O_MAcc.js";import"./EmulatedBoldText-DLcv393z.js";import"./Text-B3jOd0w4.js";import"./Modal-BUEX4x6z.js";import"./useOverlayController-BjtWEYCu.js";import"./useStatic-B6Ppl0UQ.js";import"./Overlay-3y_zvGr_.js";import"./OverlayContextProvider-BkZKjsKR.js";import"./LoadingSpinner-DZ0xu-4T.js";import"./IconWarning-D3143lfN.js";import"./remote-BClk6GLL.js";import"./Dialog-0Ix26WHm.js";import"./Button-Dhdc5WDI.js";import"./ProgressBar-U95AIiub.js";import"./Label-CW66CEku.js";import"./Hidden-CWIFSP7u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B6JubenB.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-BNr3g4sC.js";import"./useFocus-BQlkvxNG.js";import"./useFocusRing-6TkqSe16.js";import"./useFocusable-B3euEuZy.js";import"./OverlayArrow-LwODxVqr.js";import"./useControlledState-DV7blYjC.js";import"./Collection-Wb3olWvE.js";import"./CollectionBuilder-BS3MrMhz.js";import"./SelectionIndicator-C5jgIoGq.js";import"./Separator-DyFTk6rC.js";import"./SelectionManager-B6Y4EMPJ.js";import"./useCollator-bALXm-sp.js";import"./FocusScope-BNRdhUBQ.js";import"./VisuallyHidden-DHhRta61.js";import"./ButtonView-BDWHTqnS.js";import"./Flex-CzqKXhE0.js";import"./useRef-D0S1EFiC.js";import"./ContextMenuSection-y3Qnt4sa.js";import"./getActionGroupSlot-CRNHQnN5.js";import"./useFieldComponent-BOMK2S5G.js";import"./useFilter-DwZT0Q-z.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-DuyCNcnr.js";import"./FieldDescription-BJFWlccI.js";import"./TextField-DfYJlBbG.js";import"./FieldError-B_BExaNJ.js";import"./Form-XtAuYD0I.js";import"./Group-BY2zOSJX.js";import"./Input-DI2XwVnV.js";import"./useTextField-aMHav-G9.js";import"./useFormReset-D1AT4nVs.js";import"./useFormValidation-przZuKLk.js";import"./Popover-CBq8Jp6I.js";import"./ListBox-DQ15vFIK.js";import"./DragAndDrop-x22ARH2g.js";import"./inertValue-BraWut3b.js";import"./useListState-Di86cHQq.js";import"./AlertText-Cd8Si-3W.js";import"./AlertIcon-BQQez7us.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,w=B("submit"),p=(e="")=>["example.com","test.org","email.net","mail.com"].map(o=>{const t=`${e.split("@")[0]}@${o}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),so={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const e=async g=>{await u(1500),w(g)},o=c({defaultValues:{email:"asd@example.com"}}),t=y(),b=o.watch("email");return r.jsx(d,{form:o,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(b)]})}),r.jsxs(S,{children:[r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},s={},n={render:e=>{const o=c();E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=o.watch("field");return r.jsx(d,{form:o,onSubmit:async()=>await u(2e3),children:r.jsxs(j,{children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...e,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(a,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})})}},m={render:e=>{const o=c(),t=o.watch("field");return r.jsxs(d,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(S,{children:[r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
        <Section>
          <Field name="field">
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
        </Section>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    const fieldValue = form.watch("field");
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name="field">
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
        <ActionGroup>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setError("field", {
          type: "required",
          message: "oh no"
        }, {
          shouldFocus: true
        })}>
            Error through form
          </Button>
          <Button variant="soft" color="secondary" slot="secondary" onPress={() => form.setFocus("field")}>
            Focus through form
          </Button>
          <ResetButton slot="abort">Reset</ResetButton>
          <SubmitButton>Submit</SubmitButton>
        </ActionGroup>
      </Form>;
  }
}`,...m.parameters?.docs?.source}}};const no=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,m as WithFocus,no as __namedExportsOrder,so as default};
