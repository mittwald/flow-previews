import{j as r,r as g}from"./iframe-jqgUclr4.js";import{u as c,F as d}from"./Form-Dc6zdHeZ.js";import{t as b,F as h}from"./Field-WmeAWjEG.js";import{B as f}from"./Button-Df2EGOwf.js";import{S as E}from"./Section-7B4EPCtc.js";import{A as T}from"./ActionGroup-B2OhWuHy.js";import{s as u}from"./Action-DzpPHaH9.js";import{A as i}from"./Autocomplete-C4EFyPkc.js";import{L as p}from"./Label-B_zOvN70.js";import{T as l}from"./TextField-B232pTrP.js";import{O as B}from"./Option-Z8ICSFl-.js";import{F as A}from"./FieldError-C5F3bfgz.js";import{R as F}from"./ResetButton-Bv__d16Z.js";import{S as x}from"./SubmitButton-D312ZINB.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-EX5vhkWE.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./dynamic-CApc5zUm.js";import"./flowComponent-DyY94Eac.js";import"./index-BGlwBVxd.js";import"./clsx-B-dksMZM.js";import"./index-KptOOerd.js";import"./useLocalizedStringFormatter-BczlrwGV.js";import"./context-BwRvgyRH.js";import"./IconApp-B0Y2ZEG7.js";import"./remote-7w2FpeEf.js";import"./IconX-BapyfuEN.js";import"./IconCheck-BSwcfujb.js";import"./Text-B-prTEID.js";import"./EmulatedBoldText-B9oQd6gk.js";import"./Text-tTF8cKGK.js";import"./utils-5IALZqjS.js";import"./LoadingSpinner-CE8K3mv7.js";import"./ariaLive-DpfDdvhx.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BXhO4gzH.js";import"./ProgressBar-BcVh39-H.js";import"./Label-BRPoLfQP.js";import"./Hidden-DkAwJJ8c.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cr6qu-mQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-BYHfZHyQ.js";import"./useFocus-FM6ro1uR.js";import"./useFocusRing-C1ZjOk7y.js";import"./useFocusable-Zu3bG2Sq.js";import"./ContextMenuSection-0hv9Ce60.js";import"./lib-90ocxLs-.js";import"./Dialog-MLUvkWk2.js";import"./RSPContexts-BB1SZI7P.js";import"./OverlayArrow-ERqZtQI-.js";import"./useControlledState-Cu6J25_e.js";import"./Collection-Com2yYnM.js";import"./CollectionBuilder-GNx_dNeS.js";import"./SelectionIndicator-BFlPMkh7.js";import"./Separator-BmEyAoWP.js";import"./SelectionManager-Bd2Xd50m.js";import"./useEvent-DIea5lRE.js";import"./useCollator-B9XYqGj0.js";import"./FocusScope-CJmxo3uG.js";import"./VisuallyHidden-CdTYKgUx.js";import"./getActionGroupSlot-C1ZLvjFs.js";import"./useStatic-Hn0frKun.js";import"./context-BZOmdfdu.js";import"./useFieldComponent-C0Pt2yH0.js";import"./useFilter-B4AgkJu9.js";import"./useOverlayController-BJtvb9v-.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-CYgXkka_.js";import"./FieldDescription-BpCIxkVt.js";import"./TextField-2lpdlEdv.js";import"./FieldError-DSvmLOVG.js";import"./Form-BMNY4Kb2.js";import"./Group-N_eJQU5l.js";import"./Input-Dn37EEpO.js";import"./useTextField-BDtQfqtc.js";import"./useFormReset-BuHZrSbJ.js";import"./useFormValidation-BWQF9tl0.js";import"./useControlledHostValueProps-BbYne8gB.js";import"./Popover-DoC5dA8I.js";import"./OverlayContextProvider-Couwo4Zm.js";import"./ListBox-CamY0Mnh.js";import"./DragAndDrop-CZFCnPOC.js";import"./inertValue-BQjZdKvs.js";import"./useListState-D6tRgchQ.js";import"./IconDanger-BMQW6rjZ.js";import"./useRef-N6H0Txdu.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
