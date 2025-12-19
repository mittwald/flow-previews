import{j as r,r as g}from"./iframe-DyIQYB7R.js";import{u as c,F as d,t as b,b as h}from"./Form-B0lxAPLg.js";import{R as F,S as x}from"./ResetButton-MDw1h-vd.js";import{B as f}from"./Button-C3sAJBlh.js";import{S as E}from"./Section-yajK3SK5.js";import{A as T}from"./ActionGroup-KTNDS_nc.js";import{s as u}from"./Action-2iALePMB.js";import{A as i}from"./Autocomplete-DLc1cGyc.js";import{L as p}from"./Label-Bnl2XRS7.js";import{T as l}from"./TextField-BnBQ08a8.js";import{O as B}from"./Option-GPvkDlFd.js";import{F as A}from"./FieldError-Drb2NmJE.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-tPr8Th1P.js";import"./flowComponent-B46dTgZy.js";import"./index-DNyY7P3f.js";import"./clsx-B-dksMZM.js";import"./index-BAJQpnn3.js";import"./useLocalizedStringFormatter-C8zgnVvK.js";import"./context-DQwa7-Zw.js";import"./browser-Dsy2EDmz.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-Br5k-T_U.js";import"./useRef-BA2dHosU.js";import"./IconWarning-BlqJF_wS.js";import"./remote-CduUCN7o.js";import"./Text-DP5VQe4y.js";import"./EmulatedBoldText-B3WFDqoc.js";import"./Text--49tgveg.js";import"./LoadingSpinner-BJz_a5cm.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BuUG1_MS.js";import"./ProgressBar-BLYv6NCO.js";import"./Label-DLjzrNJv.js";import"./Hidden-CjE_I8s3.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-Cx64g9XI.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DBMxrrfH.js";import"./useFocus-MkZ0Yize.js";import"./useFocusRing-Dsvy8-H7.js";import"./useFocusable-BzRC0Akk.js";import"./ContextMenuSection-CGwj4hwH.js";import"./Dialog-Bezv0IMM.js";import"./RSPContexts-D0G5Z96Z.js";import"./OverlayArrow-B8joZ1vL.js";import"./useControlledState-C9rhpCZz.js";import"./Collection-BGTuQL6n.js";import"./CollectionBuilder-DV1KSVZF.js";import"./SelectionIndicator-DEPDk5Cv.js";import"./Separator-BxbCemNh.js";import"./SelectionManager-DkxBPn8A.js";import"./useEvent-CtnbpMU6.js";import"./useCollator-CNrMRXe4.js";import"./FocusScope-CPYLtjFE.js";import"./VisuallyHidden-CpJBcPMb.js";import"./getActionGroupSlot-D_7amHYE.js";import"./useStatic-CPovvC2L.js";import"./context--viOmW11.js";import"./useOverlayController-BUDO6s9b.js";import"./useFieldComponent-BuMHMJdd.js";import"./useFilter-CHu8Wicl.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-D5dfepvt.js";import"./FieldDescription-B_xnTVZs.js";import"./TextField-C2Dg2sq1.js";import"./FieldError-CJCkmHNP.js";import"./Form-Ce0HMGMO.js";import"./Group-DlHcB2Sx.js";import"./Input-DTEp0DEd.js";import"./useTextField-CiDJOppJ.js";import"./useFormReset-DbNMnmkG.js";import"./useFormValidation-BzfV6dUL.js";import"./useControlledHostValueProps-CeGl1VUq.js";import"./Popover-BS-N1A-i.js";import"./OverlayContextProvider-D2R86dNb.js";import"./ListBox-DGNp_0rh.js";import"./DragAndDrop-DojR98i0.js";import"./inertValue-CrsegbVT.js";import"./useListState-BIAVWVqg.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
