import{j as r,r as g}from"./iframe-B9uPShpw.js";import{u as c,F as d}from"./Form-Q90y3tRs.js";import{B as f}from"./Button-BmSId73m.js";import{S as b}from"./Section-Ny8qJyCT.js";import{A as E}from"./ActionGroup-BzV4LqD-.js";import{s as u}from"./Action-BG9uiL-h.js";import{A as i}from"./Autocomplete-Dh6r6fJ2.js";import{L as p}from"./Label-KwkmvcNF.js";import{T as l}from"./TextField-BnPI5kdl.js";import{O as T}from"./Option-rTTcoBOJ.js";import{F as B}from"./FieldError-CWcQNDFm.js";import{R as h}from"./ResetButton-CiFLSEoZ.js";import{t as A,F}from"./Field-DaTa4ON7.js";import{S as x}from"./SubmitButton-67a0DKJ8.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-DkOndk9b.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DaNB93st.js";import"./index-BHigKFJv.js";import"./index-C-9nCgVF.js";import"./IconApp-Dlsy_N62.js";import"./remote-BWMO5jwH.js";import"./IconX-9DqQUbWU.js";import"./IconCheck-CR4Xfb4H.js";import"./Text-CNAgZ6Gu.js";import"./EmulatedBoldText-CttSSL63.js";import"./Text-BY4f0OUC.js";import"./utils-Daj4d2Cf.js";import"./LoadingSpinner-Du_twv2V.js";import"./ariaLive-BNqOvCbo.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-BoeFAG81.js";import"./context-C9xya_TD.js";import"./Button-CfSbOp9X.js";import"./ProgressBar-BCTL0_PO.js";import"./Label-DMYXGfMz.js";import"./Hidden-DXuNaD-Y.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CcI46r6t.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CIPi1cMp.js";import"./useFocus-BRHOSDKu.js";import"./useFocusRing-kdNWDtkT.js";import"./useFocusable-3eJpH5lU.js";import"./ContextMenuSection-CdGZ4RR9.js";import"./lib-90ocxLs-.js";import"./Dialog-D67Qmi5f.js";import"./RSPContexts-D3LiPnZ6.js";import"./OverlayArrow-D2N0P4yy.js";import"./useControlledState-DaoeHdVs.js";import"./Collection-CsRpAj9n.js";import"./CollectionBuilder-g4fV9EQ5.js";import"./SelectionIndicator-C2YxFtZ5.js";import"./Separator-BAZWFUsp.js";import"./SelectionManager-CuNUAezw.js";import"./useEvent-B8UCcaDh.js";import"./useCollator-YFGcYRYP.js";import"./FocusScope-DabbQPzk.js";import"./VisuallyHidden-C1crbJmY.js";import"./dynamic-DCdgkrTe.js";import"./getActionGroupSlot-MOt65LPv.js";import"./useStatic-DxPieb3u.js";import"./context-B0UTB4Wa.js";import"./useFieldComponent-BtkWQmwv.js";import"./useFilter-0GhgfH-n.js";import"./useOverlayController-hWFovTxl.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CWOpTUNb.js";import"./FieldDescription-DLWMndWC.js";import"./TextField-CwEytWoI.js";import"./FieldError-B2c6KACK.js";import"./Form-CxeKG7IW.js";import"./Group-DF2dyCo5.js";import"./Input-D-KO421J.js";import"./useTextField-DSbVcLWI.js";import"./useFormReset-BDYhp5bc.js";import"./useFormValidation-Bgk2NLp4.js";import"./useControlledHostValueProps-BbXEocRi.js";import"./Popover-BVGGuKiU.js";import"./OverlayContextProvider-pgZNK9TS.js";import"./ListBox-Bkt5nAZH.js";import"./DragAndDrop-B9zqX5uj.js";import"./inertValue-CHfDVqzP.js";import"./useListState-BKFyGVJ6.js";import"./IconDanger-q09hWhBt.js";import"./useRef-DWqG7DdS.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=A(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(E,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
