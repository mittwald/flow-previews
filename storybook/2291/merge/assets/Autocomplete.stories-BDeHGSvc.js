import{j as r,r as g}from"./iframe-DSXKf9Qs.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-DQocwP5Q.js";import{B as f}from"./Button-D9RPwGO-.js";import{S as E}from"./Section-C2etDRXq.js";import{A as T}from"./ActionGroup-Cult8i-N.js";import{s as u}from"./Action-D8TvePO3.js";import{A as i}from"./Autocomplete-C2KwE-mT.js";import{L as p}from"./Label-BZGX3mYQ.js";import{T as l}from"./TextField-Dq8pJoUD.js";import{O as B}from"./Option-B3OOFwzM.js";import{F as A}from"./FieldError-DyLpPvQc.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-waHTXRlt.js";import"./flowComponent-aTnVZ28_.js";import"./index-_ST8Xdbb.js";import"./clsx-B-dksMZM.js";import"./index-xIXPquhv.js";import"./useLocalizedStringFormatter-DnMeMDV0.js";import"./context-DU2DYbHB.js";import"./useRef-i8-2SC7v.js";import"./utils-BkNrSrSW.js";import"./ButtonView-d2J1OyEz.js";import"./browser-zi1f_NHh.js";import"./IconWarning-CsaNdeaY.js";import"./remote-Gy-Ku51P.js";import"./Text-C7KW9wgf.js";import"./EmulatedBoldText-CWbGlL7P.js";import"./Text-BGc7dsTw.js";import"./LoadingSpinner-CM9ywy6H.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DD62R7IC.js";import"./ProgressBar-zeu61Rhn.js";import"./Label-Dnlar29r.js";import"./Hidden-Bsr5uGtI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-D2CXizlL.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-D3-3tpV2.js";import"./useFocus-BkCMpCSs.js";import"./useFocusRing-9tutEJo4.js";import"./useFocusable-BiabYp81.js";import"./ContextMenuSection-8AZZSNKN.js";import"./Dialog-Dgijbiav.js";import"./RSPContexts-C47t6iqA.js";import"./OverlayArrow-wV4le4-P.js";import"./useControlledState-C8VBbj0I.js";import"./Collection-Bm0CT5e0.js";import"./CollectionBuilder-fJJ3qX8z.js";import"./SelectionIndicator-BtJjQV2B.js";import"./Separator-BRbgnZrd.js";import"./SelectionManager-DlGSpMCY.js";import"./useEvent-BOIZmRJ7.js";import"./useCollator-dJhHztcY.js";import"./FocusScope-C1tZWIaN.js";import"./VisuallyHidden-p8Ypb2KO.js";import"./getActionGroupSlot-CBC8VLuN.js";import"./useStatic-CLatwN1t.js";import"./context-CiYX6UJF.js";import"./useOverlayController-C4MSz-T2.js";import"./useFieldComponent-CCab4n06.js";import"./useFilter-SbnmxrNy.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-DA4HPgA7.js";import"./FieldDescription-D3qqafyO.js";import"./TextField-DBMQ6SdS.js";import"./FieldError-D2u-4343.js";import"./Form-CmWGeahq.js";import"./Group-cFUMqjZ6.js";import"./Input-C3UpKYh9.js";import"./useTextField-yOaw7krz.js";import"./useFormReset-CY4Zdzy9.js";import"./useFormValidation-CZFMPKAm.js";import"./Popover-jJwFFzdg.js";import"./OverlayContextProvider-BrBwXgQ3.js";import"./ListBox-mFTa9dlR.js";import"./DragAndDrop-CM2TcLtt.js";import"./inertValue-h9cwPdv5.js";import"./useListState-CqcH_ZFl.js";import"./AlertText-ppaXibkF.js";import"./AlertIcon-Bx5_fWVD.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
