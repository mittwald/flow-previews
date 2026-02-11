import{r as g,j as r}from"./iframe-l3dQPg2D.js";import{u as c,F as d,a as h,R as F,S as x,t as b}from"./ResetButton-DLfZ0hQG.js";import{B as f}from"./Button-CVhESpos.js";import{S as E}from"./Section-CVphuZOP.js";import{A as T}from"./ActionGroup-vmrUH0ag.js";import{s as u}from"./Action-BglyJGiG.js";import{A as i}from"./Autocomplete-iRtMRLHB.js";import{L as p}from"./Label-DxyvMbSs.js";import{T as l}from"./TextField-IenbTK_-.js";import{O as B}from"./Option-CBQdW90a.js";import{F as A}from"./FieldError-Q6bz3Uf7.js";import"./preload-helper-PPVm8Dsz.js";import"./dynamic-CCyGrJK3.js";import"./flowComponent-BopG63Mr.js";import"./index-C4NaKCSa.js";import"./clsx-B-dksMZM.js";import"./index-BnwDl3XO.js";import"./useLocalizedStringFormatter-DUXcPKxv.js";import"./context-bJyTUMD1.js";import"./useRef-FIk_DJsE.js";import"./utils-BpR6PJXM.js";import"./ButtonView-DNKUy4ei.js";import"./browser-vgtThTGE.js";import"./IconWarning-C2C4Ye1P.js";import"./remote-VRbYHHBV.js";import"./Text-Cd9ftiQT.js";import"./EmulatedBoldText-CAbtCiS8.js";import"./Text-CND2PMao.js";import"./LoadingSpinner-p4NafINf.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Dfp0w4eo.js";import"./ProgressBar-DjNwNSer.js";import"./Label-zTT8xDTv.js";import"./Hidden-D7QtMOwf.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Bgm61Ocu.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CLrRc3iw.js";import"./useFocus-BoIaqFAK.js";import"./useFocusRing-Sg4LsORI.js";import"./useFocusable-CewhyE_c.js";import"./ContextMenuSection-C_ZfDCN7.js";import"./Dialog-ByCdR2Sm.js";import"./RSPContexts-D9dFuQ_b.js";import"./OverlayArrow-BBo0Td8e.js";import"./useControlledState-DV6ufSFw.js";import"./Collection-3pd5EYPv.js";import"./CollectionBuilder-BWIBmgEn.js";import"./SelectionIndicator-DJKLLJ3b.js";import"./Separator-70ZL6L0X.js";import"./SelectionManager-D6KTmYmL.js";import"./useEvent-D7GEvC9q.js";import"./useCollator-BSc7Uwep.js";import"./FocusScope-Cs1Wy-O3.js";import"./VisuallyHidden-D5CUP-QC.js";import"./getActionGroupSlot-Dy_Fxu9H.js";import"./useStatic-BdWyaTNp.js";import"./context-BBlsigfO.js";import"./useOverlayController-Df50joLL.js";import"./useFieldComponent-CTh-2D00.js";import"./useFilter-BgCl5mRx.js";import"./Label.module-CUYTf9Jc.js";import"./useControlledHostValueProps-Di36nhEL.js";import"./FieldDescription-DDFYZqNC.js";import"./TextField-BbT6CVIE.js";import"./FieldError-DNTSOotb.js";import"./Form-bbOcDT_r.js";import"./Group-D4YQYKb-.js";import"./Input-AZztYHyS.js";import"./useTextField-4COopty-.js";import"./useFormReset-mKOiKuYb.js";import"./useFormValidation-D7taYq4g.js";import"./Popover-pewrL_I7.js";import"./OverlayContextProvider-yNeb3roI.js";import"./ListBox-CNpiZ6mg.js";import"./DragAndDrop-BvQR8YBs.js";import"./inertValue-DJyFO5FB.js";import"./useListState-V77yFO_L.js";import"./AlertText-D9cFuXo0.js";import"./AlertIcon-C6xXCfYQ.js";const{action:y}=__STORYBOOK_MODULE_ACTIONS__,w=y("submit"),a=(o="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const t=`${o.split("@")[0]}@${e}`;return r.jsx(B,{value:t,textValue:t,children:t},t)}),re={title:"Integrations/React Hook Form/Autocomplete",component:i,render:()=>{const o=async S=>{await u(1500),w(S)},e=c({defaultValues:{email:"asd@example.com"}}),t=b(),j=e.watch("email");return r.jsx(d,{form:e,onSubmit:o,children:r.jsxs(E,{children:[r.jsx(t,{name:"email",rules:{required:"Is required"},children:r.jsxs(i,{children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(j)]})}),r.jsxs(T,{children:[r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})]})})}},m={},s={render:o=>{const e=c();g.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsxs(i,{...o,children:[r.jsx(l,{isInvalid:!0,children:r.jsx(p,{children:"Test"})}),r.jsx(A,{children:"ErrorFromOuterFieldError!"}),a(t)]})]})}},n={render:o=>{const e=c(),t=e.watch("field");return r.jsxs(d,{form:e,onSubmit:async()=>await u(2e3),children:[r.jsx(h,{name:"field",children:r.jsxs(i,{...o,children:[r.jsx(l,{children:r.jsx(p,{children:"Test"})}),a(t)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(f,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(f,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(F,{children:"Reset"}),r.jsx(x,{children:"Submit"})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:"{}",...m.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
