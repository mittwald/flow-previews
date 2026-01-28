import{j as r,r as g}from"./iframe-DcJYxA4H.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-CXFeL3NK.js";import{B as f}from"./Button-ByRmZgOS.js";import{S as E}from"./Section-BfQoljOJ.js";import{A as T}from"./ActionGroup-B_pSbWAL.js";import{s as u}from"./Action-Dlz18l4c.js";import{A as i}from"./Autocomplete-DmByr_tT.js";import{L as p}from"./Label-DYsIDPwe.js";import{T as l}from"./TextField-Bg0iyGBM.js";import{O as B}from"./Option-B6wxtv7E.js";import{F as A}from"./FieldError-B2Tu46Cr.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-BeRAROrj.js";import"./flowComponent-BLRiscD5.js";import"./index-DqZIl2km.js";import"./clsx-B-dksMZM.js";import"./index-BLaZpk-P.js";import"./useLocalizedStringFormatter-CF3rZOx1.js";import"./context-qV6jeEP3.js";import"./useRef-SxwSBVoc.js";import"./utils-DilzIpMR.js";import"./ButtonView-ByBYPO5_.js";import"./browser-DuGwj8Dx.js";import"./IconWarning-C1b-rglK.js";import"./remote-Bz3vE1W1.js";import"./Text-DtgxB8-I.js";import"./EmulatedBoldText-B8m3SU7U.js";import"./Text-CtAF_MdJ.js";import"./LoadingSpinner-Cq4_0Dfa.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-igLlXErA.js";import"./ProgressBar-NBTy9B_U.js";import"./Label-C5pMaxrW.js";import"./Hidden-DfDLmmBw.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DpAfaget.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CoiuKGvm.js";import"./useFocus-CBKKPZUx.js";import"./useFocusRing-KHZvHeNt.js";import"./useFocusable-CBOZtalu.js";import"./ContextMenuSection-QDoQ1eGc.js";import"./Dialog-Dz1EswEt.js";import"./RSPContexts-B2T9ptP_.js";import"./OverlayArrow-wMKeeSQ0.js";import"./useControlledState-BqUYry3y.js";import"./Collection-CKg9fKRI.js";import"./CollectionBuilder-Cc_loPne.js";import"./SelectionIndicator-DgZf9HEL.js";import"./Separator-BAQ5hF_i.js";import"./SelectionManager-yA8P5A7T.js";import"./useEvent-stiRI7x_.js";import"./useCollator-CoXNjTxb.js";import"./FocusScope-CWIATeBq.js";import"./VisuallyHidden-5QTr2j1N.js";import"./getActionGroupSlot-DWUJnrNV.js";import"./useStatic-CtzGIMZo.js";import"./context-D2f0m16x.js";import"./useOverlayController-B1TTUHMS.js";import"./useFieldComponent-rnjT2dRC.js";import"./useFilter-CF-HjUeA.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CRFHOErC.js";import"./FieldDescription-DgkERfUc.js";import"./TextField-D_iglgqs.js";import"./FieldError-BmNSHu0e.js";import"./Form-C2ZrGthD.js";import"./Group--doBvykr.js";import"./Input-Cz4fvs1s.js";import"./useTextField-DpGaW4Tx.js";import"./useFormReset-BxLymg31.js";import"./useFormValidation-CxhT4ib7.js";import"./useControlledHostValueProps-B3OONvK6.js";import"./Popover-B9Nlr10i.js";import"./OverlayContextProvider-77-UrxPo.js";import"./ListBox-BTmqQNwh.js";import"./DragAndDrop-C2LlqJSk.js";import"./inertValue-OzLUmTyl.js";import"./useListState-XVGSUWqq.js";import"./AlertText-DzwHJxKU.js";import"./AlertIcon-5jttAq4b.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
