import{j as r,r as g}from"./iframe-CV15FJMl.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-Dy0XVagH.js";import{B as f}from"./Button-CPmcSz1K.js";import{S as E}from"./Section-DxMSYwau.js";import{A as T}from"./ActionGroup-Bfa2abXX.js";import{s as u}from"./Action-k7eAd4lv.js";import{A as i}from"./Autocomplete-DSMk-Q15.js";import{L as p}from"./Label-BYiN1vfD.js";import{T as l}from"./TextField-B9Sj9JY1.js";import{O as B}from"./Option-BbjFLPbD.js";import{F as A}from"./FieldError-e14SOUTJ.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-83TxHgtq.js";import"./flowComponent-zkKbLiwJ.js";import"./index-BdI4bZr-.js";import"./clsx-B-dksMZM.js";import"./index-DgyS9CYh.js";import"./useLocalizedStringFormatter-DhOUTddD.js";import"./context-Is67_JkX.js";import"./useRef-Q0HZ1Gfv.js";import"./utils-B45PgFGd.js";import"./ButtonView-CuCKGckF.js";import"./browser-8BNXX35r.js";import"./IconWarning-CS7d0V5Y.js";import"./remote-BYNvJzFU.js";import"./Text-DO3jYkuR.js";import"./EmulatedBoldText-CKJb5Byw.js";import"./Text-Bk0CAvR5.js";import"./LoadingSpinner-C2UghIT7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Deu1Fo5o.js";import"./ProgressBar-DYhZqT6M.js";import"./Label-DnBvsshm.js";import"./Hidden-DbKTPC62.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DgTpLYXb.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C9ebI84m.js";import"./useFocus-C3kMSW21.js";import"./useFocusRing-CoS5ESqQ.js";import"./useFocusable-DenRoGzb.js";import"./ContextMenuSection-BP5kvD_3.js";import"./Dialog-CvkIF4vR.js";import"./RSPContexts-09abhkzW.js";import"./OverlayArrow-BtUNb3SD.js";import"./useControlledState-Br5i43rk.js";import"./Collection-BDyrlbfU.js";import"./CollectionBuilder-DPEpUwFF.js";import"./SelectionIndicator-C649Jmr0.js";import"./Separator-BUXgDBus.js";import"./SelectionManager-DjElDtGz.js";import"./useEvent-CGsPBawQ.js";import"./useCollator-C223TjTn.js";import"./FocusScope-Da56m84L.js";import"./VisuallyHidden-DJ3SqDe0.js";import"./getActionGroupSlot-CEtNZ_Ue.js";import"./useStatic-CaY36sW2.js";import"./context-z7OXrsOp.js";import"./useOverlayController-10mwaIn0.js";import"./useFieldComponent-4syZJMEs.js";import"./useFilter-CyZ9v00x.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CM4cdUAH.js";import"./FieldDescription-BbUtqeWX.js";import"./TextField-C5RLv0sl.js";import"./FieldError-CDBleeuN.js";import"./Form-B5_Ftb3l.js";import"./Group-Oc33WXVS.js";import"./Input-Wuyb26cC.js";import"./useTextField-DH39Jsbq.js";import"./useFormReset-DQt01LcM.js";import"./useFormValidation-rdndu8q5.js";import"./useControlledHostValueProps-CzUjaEYd.js";import"./Popover-Bhj9zixw.js";import"./OverlayContextProvider-B4MrJ_Vf.js";import"./ListBox-BCA_7zod.js";import"./DragAndDrop-FA8o4r3l.js";import"./inertValue-BCT40x5y.js";import"./useListState-whom4hyM.js";import"./AlertText-Dryg6b6V.js";import"./AlertIcon-BZ2qa2OA.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ee={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
