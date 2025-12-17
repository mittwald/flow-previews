import{j as r,r as g}from"./iframe-BoCc-iJU.js";import{u as c,F as d}from"./Form-B53eFlWd.js";import{B as f}from"./Button-XooD-Xiy.js";import{S as b}from"./Section-NRJmv6xi.js";import{A as E}from"./ActionGroup-Cq_e26ja.js";import{s as u}from"./Action-CKhPUoRP.js";import{A as i}from"./Autocomplete-YzHA3rmN.js";import{L as p}from"./Label-DGwnCcrv.js";import{T as l}from"./TextField-NPiMOyp_.js";import{O as T}from"./Option-CDqoFNL1.js";import{F as B}from"./FieldError-gHUqbDM9.js";import{R as h}from"./ResetButton-1ZvDQoFd.js";import{t as A,F}from"./Field-DT4WU7wb.js";import{S as x}from"./SubmitButton-CJxf1GR5.js";import"./preload-helper-PPVm8Dsz.js";import"./browser-BzlHG3zD.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./clsx-B-dksMZM.js";import"./flowComponent-aIKmACWg.js";import"./index-U3eHMBln.js";import"./index-CpJJlR3B.js";import"./IconApp-C2RMdkv5.js";import"./remote-DSbtRD5R.js";import"./IconX-CkgsTx4p.js";import"./IconCheck-B8A9P0y2.js";import"./Text-CxsQklp2.js";import"./EmulatedBoldText-CBFTpxXk.js";import"./Text-CwFr0z0b.js";import"./utils-P0pc5_a9.js";import"./LoadingSpinner-MhY_zuYj.js";import"./ariaLive-DBfYrca8.js";import"./LiveAnnouncer-Cy654hVN.js";import"./useLocalizedStringFormatter-CGHFzKy5.js";import"./context-BrFrKL-P.js";import"./Button-D6UvikyC.js";import"./ProgressBar-2FpoVhjA.js";import"./Label-E_BXoGJl.js";import"./Hidden-7MHP_c1E.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-msUyYt71.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-C11Qnu-9.js";import"./useFocus-Cge5HK5z.js";import"./useFocusRing-GN2tGneZ.js";import"./useFocusable-C7xRBGe6.js";import"./ContextMenuSection-DJIIq9GL.js";import"./lib-90ocxLs-.js";import"./Dialog-CZPzdPg7.js";import"./RSPContexts-ZqX2hjEE.js";import"./OverlayArrow-BflVffdz.js";import"./useControlledState-Bp_HlHxi.js";import"./Collection-CTIB5Yac.js";import"./CollectionBuilder-pq_KYGFA.js";import"./SelectionIndicator-DXYS_YB1.js";import"./Separator-MSKztmUd.js";import"./SelectionManager-gKDO3ABG.js";import"./useEvent-2MJ1vmf8.js";import"./useCollator-8xA0jmsd.js";import"./FocusScope-DAKoy3Tt.js";import"./VisuallyHidden-Dalv-eS5.js";import"./dynamic-CBUiQ56u.js";import"./getActionGroupSlot-B7nGnNh4.js";import"./useStatic-BIG45Iee.js";import"./context-xz8cKbOL.js";import"./useFieldComponent-BP-lIfvD.js";import"./useFilter-Dd4uEdG-.js";import"./useOverlayController--iCs4C_D.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-of84vzRi.js";import"./FieldDescription-DAwt_2_X.js";import"./TextField-DZWBFePt.js";import"./FieldError-Cv1yZmyj.js";import"./Form-AyX8lm4h.js";import"./Group-DUY-xJc3.js";import"./Input-BVdlr_HZ.js";import"./useTextField-Zsr4se75.js";import"./useFormReset-Bkd1XrYX.js";import"./useFormValidation-DSNLWRBM.js";import"./useControlledHostValueProps-Cdc0IVz3.js";import"./Popover-4GpCHo5o.js";import"./OverlayContextProvider-CAxGx9pi.js";import"./ListBox-CPVnWtp1.js";import"./DragAndDrop-bfGEk3Su.js";import"./inertValue-C2Fjgius.js";import"./useListState-CfGYW0m6.js";import"./IconDanger-CyJfzsCE.js";import"./useRef-DM9KQBRC.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(T,{value:t,textValue:t,children:t},t)}),ne={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=A(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(b,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(E,{children:[r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(B,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(F,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(h,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
