import{r as g,j as r}from"./iframe-DsvUdpXw.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-BMOT3GH_.js";import{B as f}from"./Button-Bh17vETd.js";import{S as E}from"./Section-DVr7ON9z.js";import{A as T}from"./ActionGroup-DXsjU9YE.js";import{s as u}from"./Action-CHQuPKKz.js";import{A as i}from"./Autocomplete-CdWPNkvn.js";import{L as p}from"./Label-V0M08dzp.js";import{T as l}from"./TextField-Di2EWGyH.js";import{O as B}from"./Option-CnuyF2gw.js";import{F as A}from"./FieldError-DMawyIiV.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-B-6cr1cE.js";import"./flowComponent-BHKkbUKe.js";import"./index-CAxJgE7t.js";import"./clsx-B-dksMZM.js";import"./index-BOZmgZtE.js";import"./useLocalizedStringFormatter-CuRFYkX4.js";import"./context-BSJoRVhT.js";import"./useRef-Cuy_dzRn.js";import"./utils-elFy1-Tx.js";import"./ButtonView-ngwm-oT3.js";import"./browser-BtOTkQbR.js";import"./IconWarning-DeQxeoQB.js";import"./remote-Bzinmuoi.js";import"./Text-DX5v3ksG.js";import"./EmulatedBoldText-7KsmeNIZ.js";import"./Text-qH9eQPgP.js";import"./LoadingSpinner-DQcVqwZx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RLHEBlnW.js";import"./ProgressBar-iQ50i7yu.js";import"./Label-E9gf7XUf.js";import"./Hidden-CTz_rsXv.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CEPtaVyT.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BFT-1ljl.js";import"./useFocus-DN2AExbL.js";import"./useFocusRing-DkxfWW5E.js";import"./useFocusable-CD1pLlOX.js";import"./ContextMenuSection-CZOOjTrg.js";import"./Dialog-DDWgyAFS.js";import"./RSPContexts-C2fytUZa.js";import"./OverlayArrow-BaL5B_Kp.js";import"./useControlledState-HbpZAl0m.js";import"./Collection-Da99ROgL.js";import"./CollectionBuilder-CzjqfU1x.js";import"./SelectionIndicator-CDySPjGG.js";import"./Separator-BomnlaZI.js";import"./SelectionManager-Buucfd3A.js";import"./useEvent-DL_JcHww.js";import"./useCollator-DXJOSFu6.js";import"./FocusScope-eXu984DB.js";import"./VisuallyHidden-Ds80HbqR.js";import"./getActionGroupSlot-CZI_KsgW.js";import"./useStatic-B4i3epQD.js";import"./context-ya2kPvzB.js";import"./useOverlayController-DxWxo43I.js";import"./useFieldComponent-CWVnpPPS.js";import"./useFilter-aBkIIk56.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-CBts7xi2.js";import"./FieldDescription-GkX1e7wK.js";import"./TextField-D9iaV1ub.js";import"./FieldError-S3zhgpi7.js";import"./Form-_ij7bXRe.js";import"./Group-VzCh1Jz3.js";import"./Input-B3qlT_4M.js";import"./useTextField-CImQ85Uo.js";import"./useFormReset-BZPoHMi4.js";import"./useFormValidation-B3UJ98ri.js";import"./Popover-CqiNCQcV.js";import"./OverlayContextProvider-DlpSiBKI.js";import"./ListBox-Cr9c_L8f.js";import"./DragAndDrop-B673whzW.js";import"./inertValue-tFGzIbQ2.js";import"./useListState-Bu9XXeeO.js";import"./AlertText-DtX3FOrI.js";import"./AlertIcon-C2Vz7YO6.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
