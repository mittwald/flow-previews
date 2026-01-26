import{j as r,r as g}from"./iframe-B-_izELn.js";import{u as c,F as d,t as b,b as h}from"./Form-Dp0ieSSq.js";import{R as F,S as x}from"./ResetButton-BDQEP0wp.js";import{B as f}from"./Button-rB1lHab_.js";import{S as E}from"./Section-BEewp5lM.js";import{A as T}from"./ActionGroup-Cyfs3irQ.js";import{s as u}from"./Action-CmZvSofW.js";import{A as i}from"./Autocomplete-D3dogTcG.js";import{L as p}from"./Label-xN0BMhRq.js";import{T as l}from"./TextField-NzZ_QdUO.js";import{O as B}from"./Option-CENDJAqQ.js";import{F as A}from"./FieldError-C2OlbqQW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-bdsqC1kS.js";import"./flowComponent-CP4SCJWM.js";import"./index-CcQr3Ju_.js";import"./clsx-B-dksMZM.js";import"./index-C24wTi9Q.js";import"./useLocalizedStringFormatter-BEnL5M6A.js";import"./context-CP_ivtNk.js";import"./browser-C9rDHpHO.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-CTzaLK4l.js";import"./useRef-Cr1C-aLL.js";import"./IconWarning-DXXSRvhn.js";import"./remote-DY2XWwFP.js";import"./Text-B9UK706u.js";import"./EmulatedBoldText-DO19SLv9.js";import"./Text-Cbq-V_qs.js";import"./LoadingSpinner-BCeR-IPA.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RawUYYof.js";import"./ProgressBar-CGHlOl5l.js";import"./Label-DUJ6ba3Y.js";import"./Hidden-Ud3q5koP.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DZiDffWU.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CDCEcfQ2.js";import"./useFocus-BKzgn786.js";import"./useFocusRing-DHjGYA3Q.js";import"./useFocusable-I-aSrCr_.js";import"./ContextMenuSection-Cd3ymo9B.js";import"./Dialog-C6Hf8kgU.js";import"./RSPContexts-k_uvwm8O.js";import"./OverlayArrow-C1kYwcM3.js";import"./useControlledState-tdUQVzVH.js";import"./Collection-BlKc58PT.js";import"./CollectionBuilder-C9MyseWf.js";import"./SelectionIndicator-ey4emqqq.js";import"./Separator-xctm41Qr.js";import"./SelectionManager-Bstf7-gd.js";import"./useEvent-DwiqP_vq.js";import"./useCollator-Sj9w00om.js";import"./FocusScope-BQUCV4aX.js";import"./VisuallyHidden-DwaExAJM.js";import"./getActionGroupSlot-DlereTwl.js";import"./useStatic-k4uG0_kr.js";import"./context--GYGv0Su.js";import"./useOverlayController-DRATrlGn.js";import"./useFieldComponent-Kyt2SdHG.js";import"./useFilter-BWXHeyJA.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-VzMWu6Xc.js";import"./FieldDescription-Bm61smCN.js";import"./TextField-BAIaIFS9.js";import"./FieldError-2QNeUIGm.js";import"./Form-CwweEOY6.js";import"./Group-CL4KrlTp.js";import"./Input-Ch7XH0d5.js";import"./useTextField-BA5-wrv-.js";import"./useFormReset-BUoUtOhQ.js";import"./useFormValidation-d7hQTD7K.js";import"./useControlledHostValueProps-DNK8lF1k.js";import"./Popover-BgKMlpHY.js";import"./OverlayContextProvider-CZWz1i-_.js";import"./ListBox-CSd-lRGc.js";import"./DragAndDrop-B00As7Yo.js";import"./inertValue-Ly9xhoQC.js";import"./useListState-fKZq3HfY.js";import"./AlertText-BdI1vJoj.js";import"./AlertIcon-DHh3kTXL.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
