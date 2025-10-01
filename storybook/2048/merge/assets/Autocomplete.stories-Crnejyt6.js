import{j as t}from"./iframe-BdvCKsbF.js";import{u as h,F as f,t as b,a as O}from"./Form-C_oFPc-t.js";import{B as m}from"./Button-CEcdxUV1.js";import{S as y}from"./Section-Jzko1FZT.js";import{A}from"./ActionGroup-8hqY-sJD.js";import{s as j}from"./Action-CY3HJwZy.js";import{A as p}from"./Autocomplete-DfBFsvd2.js";import{L as F}from"./Label-669hhtQM.js";import{T as B}from"./TextField-CY8AaD_g.js";import{O as n}from"./Option-dyRr_lkn.js";import{S as v}from"./SearchField-BdLAXFPY.js";import"./index-Cun1SEai.js";import"./dynamic-a4vM_yKz.js";import"./flowComponent-pHCscBgm.js";import"./index-CcTYzsK6.js";import"./clsx-B-dksMZM.js";import"./index-nNeao2-W.js";import"./FieldError-CdPfgsKF.js";import"./IconWarning-P52nLd_s.js";import"./FieldError-CxS3H1fm.js";import"./utils-BbupUKpI.js";import"./Text-C3C-Y4LW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-CqStrOIa.js";import"./context-DElBd4UT.js";import"./browser-1fV_VPE3.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Text-JqEaJ00k.js";import"./EmulatedBoldText-Bq1I9eFa.js";import"./LoadingSpinner-2grY-J-m.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-rqlppWuO.js";import"./ProgressBar-kDZvVta4.js";import"./Label-6ghd3nSI.js";import"./Hidden-DHl5AEyE.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DSXZ_FtS.js";import"./useFocus-BlE0zHW0.js";import"./useFocusRing-CkzTFAtm.js";import"./useFocusable-F8xU0DHg.js";import"./ContextMenuSection-BnE57rKt.js";import"./Dialog-CKgg94zq.js";import"./RSPContexts-Bh8BGw74.js";import"./OverlayArrow-Ck2ASDGt.js";import"./useControlledState-DFl6XB3S.js";import"./Collection-BLnLf1sz.js";import"./CollectionBuilder-C6WQfqbB.js";import"./context-BhDiC0Wn.js";import"./Separator-CZgxguF8.js";import"./SelectionManager-qFHbh8Rk.js";import"./useEvent-DnBkuKjZ.js";import"./useCollator-EaQty6uw.js";import"./FocusScope-pfm_0aY5.js";import"./VisuallyHidden-Nt_GLLf_.js";import"./getActionGroupSlot-B9XM3kr8.js";import"./useStatic-PYikJUKS.js";import"./context-CCm7d4ti.js";import"./useOverlayController-Ot3Ai6Bn.js";import"./ReactAriaControlledValueFix-CFNSYYni.js";import"./useFilter-C8M3rtxF.js";import"./TextFieldBase-DuLwPW_j.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-CPNVxfRH.js";import"./TextField-CuAhRXdh.js";import"./Form-5t9tGa91.js";import"./Group-H81idT9-.js";import"./Input-i8756tn3.js";import"./useTextField-EmATntPl.js";import"./useFormReset-DGsTBoXq.js";import"./useFormValidation-CYJuvObN.js";import"./Popover-DIMVCCn2.js";import"./OverlayContextProvider-DLByYP72.js";import"./ClearPropsContextView-Cu9Qi4Nq.js";import"./DragAndDrop-KQj0xqYs.js";import"./inertValue-Cg2D7aYr.js";import"./useListState-qFj90Rrf.js";const{action:_}=__STORYBOOK_MODULE_ACTIONS__,E=_("submit"),T=r=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${r.split("@")[0]}@${e}`;return t.jsx(n,{value:o,textValue:o,children:o},o)}),Xt={title:"Integrations/React Hook Form/Autocomplete",component:p,render:()=>{const r=async S=>{await j(1500),E(S)},e=h({defaultValues:{email:""}}),o=b(),g=e.watch("email");return t.jsx(f,{form:e,onSubmit:r,children:t.jsxs(y,{children:[t.jsx(o,{name:"email",children:t.jsxs(p,{children:[t.jsx(B,{children:t.jsx(F,{children:"Test"})}),T(g)]})}),t.jsxs(A,{children:[t.jsx(m,{onPress:()=>e.reset(),children:"Reset"}),t.jsx(m,{type:"submit",children:"Submit"})]})]})})}},i={},s={render:()=>{const r=h();return t.jsxs(f,{form:r,onSubmit:async()=>await j(2e3),children:[t.jsx(O,{name:"text",rules:{required:!0},children:t.jsxs(p,{children:[t.jsx(v,{children:t.jsx(F,{children:"Test"})}),t.jsx(n,{value:"example.com",children:"example.com"}),t.jsx(n,{value:"domain.de",children:"domain.de"}),t.jsx(n,{value:"test.org",children:"test.org"})]})}),t.jsx("div",{style:{marginBottom:"2200px"}}),t.jsx(m,{onPress:()=>r.setError("text",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),t.jsx(m,{onPress:()=>r.setFocus("text"),children:"focus through form"}),t.jsx(m,{type:"submit",children:"Submit"})]})}};var a,c,u;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(u=(c=i.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var l,d,x;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"text"} rules={{
        required: true
      }}>
          <Autocomplete>
            <SearchField>
              <Label>Test</Label>
            </SearchField>
            <Option value="example.com">example.com</Option>
            <Option value="domain.de">domain.de</Option>
            <Option value="test.org">test.org</Option>
          </Autocomplete>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("text", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("text")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(x=(d=s.parameters)==null?void 0:d.docs)==null?void 0:x.source}}};const Zt=["Default","WithFocusAndError"];export{i as Default,s as WithFocusAndError,Zt as __namedExportsOrder,Xt as default};
