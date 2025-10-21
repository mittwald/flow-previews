import{j as r,r as O}from"./iframe-DTheBFqg.js";import{u as d,F as u,t as w,a as y}from"./Form-Bb0OZPQ3.js";import{B as i}from"./Button-Bmq0qjWo.js";import{S as L}from"./Section-BDBFYB_1.js";import{A as V}from"./ActionGroup-Cjs4nxWu.js";import{s as f}from"./Action-XVrtYdEu.js";import{A as m}from"./Autocomplete-QhC_aJNx.js";import{L as l}from"./Label-DS5MocSE.js";import{T as a}from"./TextField-WZ9-JZa-.js";import{O as _}from"./Option-CzMk8NU3.js";import{F as v}from"./useFieldComponent-mBN-j8SF.js";import"./index-Cun1SEai.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./clsx-B-dksMZM.js";import"./index-C24gQbls.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./context-BBJsvWP1.js";import"./browser-BqPz5wcV.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./IconWarning-CXTS1Zmo.js";import"./Text-DVaBUvZL.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./Text-C48huDBb.js";import"./utils-CIVb4-pA.js";import"./LoadingSpinner-CLX8R9JK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B9sfb4m-.js";import"./ProgressBar-Dr6zks-A.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./ContextMenuSection-DVfZqLHJ.js";import"./Dialog-DwHrBIEx.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./VisuallyHidden-D3PBi60E.js";import"./dynamic-DYsVCHyX.js";import"./getActionGroupSlot-BTW6ZZ6S.js";import"./useStatic-KScOH6sT.js";import"./context-D5Eh6Kjh.js";import"./useOverlayController-CV2OMrve.js";import"./ReactAriaControlledValueFix-DoO2Kj3m.js";import"./useFilter-Lgpf3SW7.js";import"./Label.module-CUYTf9Jc.js";import"./TextFieldBase-DL6tAx3q.js";import"./FieldDescription-Coryxrlu.js";import"./TextField-7NnkUF-m.js";import"./Form-B9EEIYmx.js";import"./Group-C3T90Noz.js";import"./Input-Ct0KMtbU.js";import"./useTextField-Cl-78bMJ.js";import"./useFormReset-C6eFdCIy.js";import"./useFormValidation-Bp-At_qz.js";import"./Popover-BFP7d86q.js";import"./OverlayContextProvider-D45bIP_5.js";import"./ClearPropsContextView-CxFwQ4wb.js";import"./ClearPropsContext-NW1-nYLP.js";import"./DragAndDrop-D2Vxaxgm.js";import"./inertValue-Btot5Rlx.js";import"./useListState-C_aVRDJL.js";import"./react-children-utilities-g2QZgYrG.js";const{action:P}=__STORYBOOK_MODULE_ACTIONS__,q=P("submit"),c=(t="")=>["example.com","test.org","email.net","mail.com"].map(e=>{const o=`${t.split("@")[0]}@${e}`;return r.jsx(_,{value:o,textValue:o,children:o},o)}),ie={title:"Integrations/React Hook Form/Autocomplete",component:m,render:()=>{const t=async B=>{await f(1500),q(B)},e=d({defaultValues:{email:""}}),o=w(),A=e.watch("email");return r.jsx(u,{form:e,onSubmit:t,children:r.jsxs(L,{children:[r.jsx(o,{name:"email",children:r.jsxs(m,{children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(A)]})}),r.jsxs(V,{children:[r.jsx(i,{onPress:()=>e.reset(),children:"Reset"}),r.jsx(i,{type:"submit",children:"Submit"})]})]})})}},s={},n={render:t=>{const e=d();O.useEffect(()=>{e.setError("field",{type:"required",message:"ErrorFromForm"})},[]);const o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsxs(m,{...t,isInvalid:!0,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),r.jsx(v,{children:"ErrorFromOuterFieldError!"}),c(o)]})]})}},p={render:t=>{const e=d(),o=e.watch("field");return r.jsxs(u,{form:e,onSubmit:async()=>await f(2e3),children:[r.jsx(y,{name:"field",children:r.jsxs(m,{...t,children:[r.jsx(a,{children:r.jsx(l,{children:"Test"})}),c(o)]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(i,{onPress:()=>e.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(i,{onPress:()=>e.setFocus("field"),children:"focus through form"}),r.jsx(i,{type:"submit",children:"Submit"})]})}};var h,F,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(x=(F=s.parameters)==null?void 0:F.docs)==null?void 0:x.source}}};var j,g,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
        <Autocomplete {...props} isInvalid>
          <TextField>
            <Label>Test</Label>
          </TextField>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
          {generateFromString(fieldValue)}
        </Autocomplete>
      </Form>;
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var E,S,T;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(T=(S=p.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const me=["Default","WithFieldError","WithFocus"];export{s as Default,n as WithFieldError,p as WithFocus,me as __namedExportsOrder,ie as default};
