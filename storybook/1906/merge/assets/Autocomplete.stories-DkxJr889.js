import{j as r,r as g}from"./iframe-S6a6IBGW.js";import{u as c,F as d,t as b,b as h}from"./Form-BAvgWy2g.js";import{R as F,S as x}from"./ResetButton-CPyRYTgg.js";import{B as f}from"./Button-B33IEcV3.js";import{S as E}from"./Section-C9-cQ6KY.js";import{A as T}from"./ActionGroup-DgNfA0Me.js";import{s as u}from"./Action-D3nLwb6j.js";import{A as i}from"./Autocomplete-BvUwpGob.js";import{L as p}from"./Label-caCQNiXZ.js";import{T as l}from"./TextField-CF1EpCD8.js";import{O as B}from"./Option-DvICEMkL.js";import{F as A}from"./FieldError-BcgoZm7g.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-wFxxwS8T.js";import"./flowComponent-BLLiPPDy.js";import"./index-l1wA_Qpp.js";import"./clsx-B-dksMZM.js";import"./index-C8QsAo4A.js";import"./useLocalizedStringFormatter-DpHStB2_.js";import"./context-CXquv49b.js";import"./browser-C6w_OiT9.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-B8ercvf4.js";import"./useRef-BzNMjQrs.js";import"./IconWarning-D0GzEl3K.js";import"./remote-CCjzztUh.js";import"./Text-CLecf1p6.js";import"./EmulatedBoldText-PjFBcLAJ.js";import"./Text-XPHoRcaC.js";import"./LoadingSpinner-ngl346gH.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BnRrl5N8.js";import"./ProgressBar-f-zsGPPU.js";import"./Label-DxhkDnS7.js";import"./Hidden-CVYoRnxj.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-I1naabyM.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BUR3MtQf.js";import"./useFocus--oJxMCZo.js";import"./useFocusRing-pCPuJRtg.js";import"./useFocusable-DTyt-kbS.js";import"./ContextMenuSection-CXnCaYUl.js";import"./Dialog-C_QuIxo5.js";import"./RSPContexts-DL3JmftS.js";import"./OverlayArrow-B-DFCcpR.js";import"./useControlledState-BHa0sYDq.js";import"./Collection-BbaIJWHd.js";import"./CollectionBuilder-Cv1bZrpu.js";import"./SelectionIndicator-DSvv5afS.js";import"./Separator-CvanrP9u.js";import"./SelectionManager-Bk0PvS8a.js";import"./useEvent--nB5Gcy3.js";import"./useCollator-DUo0f6hW.js";import"./FocusScope-BEprXHob.js";import"./VisuallyHidden-BN0xrgav.js";import"./getActionGroupSlot-13Cq_BqQ.js";import"./useStatic-DJ0VynuZ.js";import"./context-DRdj7qWz.js";import"./useOverlayController-D5w3iZSN.js";import"./useFieldComponent-C7YS4lAg.js";import"./useFilter-DjETgHYP.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CVkm9PCu.js";import"./FieldDescription-BbDHCmf8.js";import"./TextField-E7LLUMXU.js";import"./FieldError-BRuAmhML.js";import"./Form-n7Om2L0f.js";import"./Group-_IqKYLf1.js";import"./Input-BCdJg_3v.js";import"./useTextField-BpiGn0fy.js";import"./useFormReset-DK3gdO9Q.js";import"./useFormValidation-DHFSk2Ol.js";import"./useControlledHostValueProps-CCflrE_G.js";import"./Popover-CTHthEzP.js";import"./OverlayContextProvider-BTF4iLEG.js";import"./ListBox-CtHnsIHL.js";import"./DragAndDrop-BgBLnA15.js";import"./inertValue-BzeHayTY.js";import"./useListState-BxI4FxSE.js";import"./AlertText-CIQFF9OC.js";import"./AlertIcon-DgqrgpKu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const oe=["Default","WithFieldError","WithFocus"];export{m as Default,s as WithFieldError,n as WithFocus,oe as __namedExportsOrder,te as default};
