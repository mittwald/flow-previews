import{r as E,j as r}from"./iframe-BXGfha1q.js";import{u as c,F as d,a as h,R as F,S as x,t as y}from"./ResetButton-BJ_wNjWf.js";import{B as f}from"./Button-DfmOHFsC.js";import{S as j}from"./Section-DH7vXPsV.js";import{A as S}from"./ActionGroup-CxRxNddr.js";import{s as u}from"./ActionBatch-z52bmq8Z.js";import{A as i}from"./Autocomplete-CIS-B5vx.js";import{L as a}from"./Label-DmvSuQEb.js";import{T as l}from"./TextField-CFRr_xny.js";import{O as T}from"./Option-z7O5k2rI.js";import{F as A}from"./FieldError-B0wR5GbE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-Cx3iunOI.js";import"./flowComponent-C3bfeK4-.js";import"./index-BUwCWycU.js";import"./clsx-B-dksMZM.js";import"./index-D0PS_Jbm.js";import"./useLocalizedStringFormatter-txuUwehO.js";import"./context-C9BhwF0E.js";import"./ActionGroupView-B4EOVs6v.js";import"./Content-BvqimwwE.js";import"./Heading-BHfoL7cG.js";import"./Heading-uLzTRNHK.js";import"./RSPContexts-CG0vEblW.js";import"./utils-DDzB-hS3.js";import"./Text-BbFupL_Y.js";import"./browser-P6njm6Fr.js";import"./EmulatedBoldText-CFo8qKvb.js";import"./Text-B1oZgTuN.js";import"./Modal-BngkIUxs.js";import"./useOverlayController-yGpX5sn6.js";import"./useStatic-BExQ1RD0.js";import"./Overlay-Bxv8vuKP.js";import"./OverlayContextProvider-CqEXBJRL.js";import"./LoadingSpinner-CnywtlQ4.js";import"./IconWarning-1Z1PxSqQ.js";import"./remote-DEIhwdad.js";import"./Dialog-DLzuiFtz.js";import"./Button-DxgvyAFC.js";import"./ProgressBar-BSSI2Xkr.js";import"./Label-B_ylra4b.js";import"./Hidden-CY2KAX5F.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DPznQWXv.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-DFEm-gMh.js";import"./useFocus-WJp8rgri.js";import"./useFocusRing-DmfdXYcF.js";import"./useFocusable-DT8F95KZ.js";import"./OverlayArrow-CHQlEDE0.js";import"./useControlledState-Wh-cgAjH.js";import"./Collection-On6X8qP5.js";import"./CollectionBuilder-CyFJ2rhO.js";import"./SelectionIndicator-DRZNhSye.js";import"./Separator-BLnBy1SU.js";import"./SelectionManager-BheZPocr.js";import"./useCollator-CF4rrgc2.js";import"./FocusScope-DorKcprJ.js";import"./VisuallyHidden-eEVd_sfi.js";import"./ButtonView-BYJeP13X.js";import"./Flex-BoCsVhbv.js";import"./useRef-DsRyiFKF.js";import"./ContextMenuSection-DVxvJxxR.js";import"./getActionGroupSlot-D3NhVtPT.js";import"./useFieldComponent-BBRXs3en.js";import"./useFilter-CLtB70fk.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-BE7xh8vi.js";import"./FieldDescription-B2zafCFx.js";import"./TextField-CSKOWfiV.js";import"./FieldError-B-_MD7Je.js";import"./Form-C11JLohN.js";import"./Group-C9lE8UeE.js";import"./Input-DlEaT4nu.js";import"./useTextField-Cyr4gso_.js";import"./useFormReset-9RWtv4Ar.js";import"./useFormValidation-51U-qV9x.js";import"./Popover-DUbvu04K.js";import"./ListBox-Li4yjG7W.js";import"./DragAndDrop-CFu-prp3.js";import"./inertValue-BB-X0gr4.js";import"./useListState-D1R5ZTY0.js";import"./AlertText-D4bpqMRF.js";import"./AlertIcon-DqNX7jjv.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,w=B("submit"),p=(e="")=>["example.com","test.org","email.net","mail.com"].map(o=>{const t=`${e.split("@")[0]}@${o}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),so={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const e=async g=>{await u(1500),w(g)},o=c({defaultValues:{email:"asd@example.com"}}),t=y(),b=o.watch("email");return r.jsx(d,{form:o,onSubmit:e,children:r.jsxs(j,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(b)]})}),r.jsxs(S,{children:[r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},s={},n={render:e=>{const o=c();E.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=o.watch("field");return r.jsx(d,{form:o,onSubmit:async()=>await u(2e3),children:r.jsxs(j,{children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsxs(i,{...e,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(a,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),p(t)]})]})})}},m={render:e=>{const o=c(),t=o.watch("field");return r.jsxs(d,{form:o,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...e,children:[r.jsx(l,{children:r.jsx(a,{children:"Test"})}),p(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsxs(S,{children:[r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"Error through form"}),r.jsx(f,{variant:"soft",color:"secondary",slot:"secondary",onPress:()=>o.setFocus("field"),children:"Focus through form"}),r.jsx(F,{slot:"abort",children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
