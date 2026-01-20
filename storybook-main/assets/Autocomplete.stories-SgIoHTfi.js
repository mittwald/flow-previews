import{j as r,r as g}from"./iframe-CG_BDTJg.js";import{u as c,F as d,t as b,b as h}from"./Form-BIGHS7Ny.js";import{R as F,S as x}from"./ResetButton-CGDsV4YZ.js";import{B as f}from"./Button-BmAaiuIV.js";import{S as E}from"./Section-pYf8QOQK.js";import{A as T}from"./ActionGroup-DAmiV-Yk.js";import{s as u}from"./Action-CprlfWDd.js";import{A as i}from"./Autocomplete-KOZVo4LV.js";import{L as p}from"./Label-eLDtxB0Y.js";import{T as l}from"./TextField-CIWgYFX0.js";import{O as B}from"./Option-BdGSBCHm.js";import{F as A}from"./FieldError-DN7cTCYW.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CvnWp_K2.js";import"./flowComponent-Cu1B5LJt.js";import"./index-C71TA-pA.js";import"./clsx-B-dksMZM.js";import"./index-CuwL1_wd.js";import"./useLocalizedStringFormatter-DqHGK81F.js";import"./context-CXt1SSmQ.js";import"./browser-yLu0BSsR.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-BtbDMhcr.js";import"./useRef-DbMFXr9W.js";import"./IconWarning-OVzy7qXj.js";import"./remote-B2NguZ9L.js";import"./Text-DpPZns_R.js";import"./EmulatedBoldText-CNB3Go6_.js";import"./Text-CLAgqxCC.js";import"./LoadingSpinner-DTxDKIsL.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DIbF_cdk.js";import"./ProgressBar-BZV9wt8q.js";import"./Label-CQ1G_pe6.js";import"./Hidden-DdAaT9j3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DI7piRsn.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C5t6ziJ-.js";import"./useFocus-BQxEMJ7t.js";import"./useFocusRing-CaZs-udO.js";import"./useFocusable-DFQV4HWE.js";import"./ContextMenuSection-BjTcX3F7.js";import"./Dialog-CMl17GR5.js";import"./RSPContexts-dESf_SGO.js";import"./OverlayArrow-CWZGtBJS.js";import"./useControlledState-BP00jBlc.js";import"./Collection-BiCXXajm.js";import"./CollectionBuilder-DPTu2GsG.js";import"./SelectionIndicator-ZCsaESBY.js";import"./Separator-BkBMJSLE.js";import"./SelectionManager-CCfPEZQf.js";import"./useEvent-B3SFi6nF.js";import"./useCollator-CGeacNLD.js";import"./FocusScope-CTViNy8e.js";import"./VisuallyHidden-pR1kpoR7.js";import"./getActionGroupSlot-CNqrnj_v.js";import"./useStatic-CTCSTBly.js";import"./context-CBhRRwo5.js";import"./useOverlayController-t3_U_UCZ.js";import"./useFieldComponent-UHV4FB79.js";import"./useFilter-BDnVvTV7.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CZp7VYKj.js";import"./FieldDescription-CpYRZCBv.js";import"./TextField-9-E4XJ-F.js";import"./FieldError-DIhe2pHb.js";import"./Form-LFW5XTCh.js";import"./Group-CxPvNJzw.js";import"./Input-Dsqxq3JD.js";import"./useTextField-DysDvNEv.js";import"./useFormReset-BbxWwIqr.js";import"./useFormValidation-BBj6R535.js";import"./useControlledHostValueProps-DF1I2_Rs.js";import"./Popover-C0DY4f9z.js";import"./OverlayContextProvider-BcT4h4_W.js";import"./ListBox-C46YpAsA.js";import"./DragAndDrop-CAojanZw.js";import"./inertValue-BZ3J-V_K.js";import"./useListState-CZtYJ8T1.js";import"./AlertText-BXThyvrG.js";import"./AlertIcon-y6uiAF7a.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),te={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
