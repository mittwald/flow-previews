import{j as r,r as g}from"./iframe-Bt_Ape3b.js";import{u as c,F as d,t as b,b as h}from"./Form-B8CwJQM0.js";import{R as F,S as x}from"./ResetButton-C8v8M-AR.js";import{B as f}from"./Button-Bm5EggmV.js";import{S as E}from"./Section-fmZi8k9e.js";import{A as T}from"./ActionGroup-BVJwbp62.js";import{s as u}from"./Action-B2h50d-b.js";import{A as i}from"./Autocomplete-C8GksQNh.js";import{L as p}from"./Label-LBQHmcU0.js";import{T as l}from"./TextField-CpOtoszI.js";import{O as B}from"./Option-BrrQEfv-.js";import{F as A}from"./FieldError-DvZju2Cm.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-D3ysZU61.js";import"./flowComponent-CoHw3WqD.js";import"./index-DJTzXtHe.js";import"./clsx-B-dksMZM.js";import"./index-gN6AAF3-.js";import"./useLocalizedStringFormatter-Bayz7Ycu.js";import"./context-BGqy3a6E.js";import"./browser-BI8hAkYP.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./utils-DGGum7sG.js";import"./useRef-1CdJSa2G.js";import"./IconWarning-BQjeLTWb.js";import"./remote-C9NcRL_b.js";import"./Text-Bs2hbxJA.js";import"./EmulatedBoldText-213nH2nf.js";import"./Text-DwU1R_Cs.js";import"./LoadingSpinner-CXrerpwy.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-pXrc8KX9.js";import"./ProgressBar-DgNpOae2.js";import"./Label-Bfb_thp3.js";import"./Hidden-CJIrU941.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-BAWBHbvC.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DErVZDbk.js";import"./useFocus-C-togmBu.js";import"./useFocusRing-Ba6s95SH.js";import"./useFocusable-BX_sV3cU.js";import"./ContextMenuSection-22Ea6AVl.js";import"./Dialog-3KThjjZh.js";import"./RSPContexts-CtPg4mPr.js";import"./OverlayArrow-CVhGLAoZ.js";import"./useControlledState-Bw01eRXu.js";import"./Collection-CZkVMDHw.js";import"./CollectionBuilder-D9hZnXF0.js";import"./SelectionIndicator-7G59x11l.js";import"./Separator-fa_nI6Bk.js";import"./SelectionManager-BSKqz5jy.js";import"./useEvent-B7_y21W_.js";import"./useCollator-CvPTpoia.js";import"./FocusScope-BOag0uW3.js";import"./VisuallyHidden-CM2m0J8e.js";import"./getActionGroupSlot-Cx8mj5km.js";import"./useStatic-DpZVpe0y.js";import"./context-CGPA3PGo.js";import"./useOverlayController-GBUtTLO-.js";import"./useFieldComponent-QpDNRghi.js";import"./useFilter-CvqYN6PL.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-BLvJh4XV.js";import"./FieldDescription-BVGH4033.js";import"./TextField-BJdO3hjf.js";import"./FieldError-Cd4omKy3.js";import"./Form-E_SZdIUl.js";import"./Group-MbSsCM3Y.js";import"./Input-DtIcDeFz.js";import"./useTextField-DKaBY6Vl.js";import"./useFormReset-BU_Yh1RY.js";import"./useFormValidation-Gf9yhQ7S.js";import"./useControlledHostValueProps-D-YKizXP.js";import"./Popover-BlR2GZVE.js";import"./OverlayContextProvider-BwOUPmKM.js";import"./ListBox-BappDmEm.js";import"./DragAndDrop-BVJG_iBV.js";import"./inertValue-BWIsFwpU.js";import"./useListState-tF5NgkyV.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
