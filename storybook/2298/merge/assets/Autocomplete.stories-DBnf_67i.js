import{j as r,r as g}from"./iframe-CTX0Bv2_.js";import{u as c,F as d,t as b,R as h,S as F,a as x}from"./ResetButton-BBbbRB2z.js";import{B as f}from"./Button--JyduJMj.js";import{S as E}from"./Section-BB_XqpVc.js";import{A as T}from"./ActionGroup-C6Lmv597.js";import{s as u}from"./Action-IRtc2zB7.js";import{A as i}from"./Autocomplete-B0Qd__WE.js";import{L as p}from"./Label-Dhp6BO4i.js";import{T as l}from"./TextField-eHlF5Myk.js";import{O as B}from"./Option-D-pi1I9M.js";import{F as A}from"./FieldError-BCaKsj_Z.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-izZr6sj3.js";import"./flowComponent-CqO4Js9m.js";import"./index-BFwThDrE.js";import"./clsx-B-dksMZM.js";import"./index-Cuy-twEi.js";import"./useLocalizedStringFormatter-Ci9fYHdG.js";import"./context-BlMA_qTH.js";import"./useRef-CPlhEGUf.js";import"./utils-DEP6wxfF.js";import"./ButtonView-Dt-QAv61.js";import"./browser-NwcAgtgI.js";import"./IconWarning-nHMyX661.js";import"./remote-Dp_KpE6s.js";import"./Text-DLhfgo2a.js";import"./EmulatedBoldText-EuanT-4h.js";import"./Text-CfE4Vxx5.js";import"./LoadingSpinner-Ch_rD6BR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-C6E7IXzn.js";import"./ProgressBar-KcEl-cak.js";import"./Label-B9GQQ3x4.js";import"./Hidden-LDMxuxmc.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CflB3N3A.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BBVfaVqb.js";import"./useFocus-Brpf5vcF.js";import"./useFocusRing-jdOUMH5T.js";import"./useFocusable-C46UWCUq.js";import"./ContextMenuSection-B5km2Fq1.js";import"./Dialog-B47KQ7WD.js";import"./RSPContexts-FayjYhqz.js";import"./OverlayArrow-B_Rckldo.js";import"./useControlledState-BSzbNF-6.js";import"./Collection-C9AhhR6W.js";import"./CollectionBuilder-DIcncGvh.js";import"./SelectionIndicator-BIEwPYk3.js";import"./Separator-Bna16C5N.js";import"./SelectionManager-BPzTX_0m.js";import"./useEvent-CpnFGpfj.js";import"./useCollator-Ac6OChDz.js";import"./FocusScope-Dney2d0V.js";import"./VisuallyHidden-DBqpLolF.js";import"./getActionGroupSlot-CcrxUumb.js";import"./useStatic-CPXlsR2u.js";import"./context-DDqdITge.js";import"./useOverlayController-DZ6rN5UT.js";import"./useFieldComponent-mADlv6K1.js";import"./useFilter-zzsB6mUg.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-Bd2ZZKcS.js";import"./FieldDescription-4xrer537.js";import"./TextField-Bl2_sgE7.js";import"./FieldError-DPNf_GCP.js";import"./Form-CEQjTe99.js";import"./Group-BOL-llIy.js";import"./Input-Bb-wn0Gj.js";import"./useTextField-NkWX01z0.js";import"./useFormReset-CFaexdLs.js";import"./useFormValidation-CLweFpah.js";import"./Popover-CrXi74XC.js";import"./OverlayContextProvider-DQ_-g1_x.js";import"./ListBox-KZyJAI2S.js";import"./DragAndDrop-D5vbu4SA.js";import"./inertValue-HOF9TlBj.js";import"./useListState-C5r6KbQK.js";import"./AlertText-CzATBvzT.js";import"./AlertIcon-CvLHNETq.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(x,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(F,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
