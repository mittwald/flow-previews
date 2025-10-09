import{j as r}from"./iframe-C72LIGrp.js";import{a as u,u as l,F as d,t as j}from"./Form-BrAeY_1h.js";import{L as h}from"./Label-BuGN1EiA.js";import{B as m}from"./Button-Dmf_fI6U.js";import{S as g}from"./Section-CMWdy8sM.js";import{A as y}from"./ActionGroup-BgMPlWay.js";import{s as f}from"./Action-BbbbpS8d.js";import{S as x}from"./Switch-Bm_KKOL7.js";import"./index-Cun1SEai.js";import"./dynamic-M8RwUexW.js";import"./flowComponent-iVWHpCHC.js";import"./index-D0tOGuOJ.js";import"./clsx-B-dksMZM.js";import"./index-D1phmMZw.js";import"./FieldError-D1AwEDR1.js";import"./IconWarning-DoRUMKye.js";import"./FieldError-DSjxrI1_.js";import"./utils-Day1TTYQ.js";import"./Text-_4m1t08i.js";import"./filterDOMProps-CghfNOdR.js";import"./useLocalizedStringFormatter-BdEN-g86.js";import"./context-BWimVEWy.js";import"./browser-Bf0-GHuQ.js";import"./isPromise-APPd_fLV-8tYzn7uh.js";import"./Label-CF9BgwC5.js";import"./Hidden-qTQe9qE3.js";import"./Text-CvlnZLd7.js";import"./EmulatedBoldText-CkSYZpi_.js";import"./LoadingSpinner-_EHg-BbH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BS54933W.js";import"./ProgressBar-BXSV1RNz.js";import"./NumberFormatter-DNR9MAW-.js";import"./usePress-CqQxVakl.js";import"./useFocus-B4vRNHSZ.js";import"./useFocusRing-DuRh0iim.js";import"./useFocusable-Dej5ci1L.js";import"./ContextMenuSection-DZErrfjN.js";import"./Dialog-DSx4rsSv.js";import"./RSPContexts-CxFI_fU2.js";import"./OverlayArrow-CdAhbmJ_.js";import"./useControlledState-BbMqle0_.js";import"./Collection-CdRuOc0_.js";import"./CollectionBuilder-CIcvBtxV.js";import"./context-yrxx87JI.js";import"./Separator-B7O3kRSm.js";import"./SelectionManager-BcjpThhu.js";import"./useEvent-C77oyAsY.js";import"./useCollator-BOhm7rcx.js";import"./FocusScope-CCmAn32n.js";import"./VisuallyHidden-BStPS_vY.js";import"./getActionGroupSlot-CHOOOagJ.js";import"./useStatic-DPVFgY8A.js";import"./context-BXphONxA.js";import"./useMakeFocusable-cMpHNIXZ.js";import"./useToggleState-CGl4-wpV.js";import"./useFormReset-Bg8mSl5k.js";const{action:B}=__STORYBOOK_MODULE_ACTIONS__,E=B("submit"),Ar={title:"Integrations/React Hook Form/Switch",component:u,render:()=>{const o=async b=>{await f(5e3),E(b)},F=l({defaultValues:{isEnabled:!1}}),S=j();return r.jsx(d,{form:F,onSubmit:o,children:r.jsxs(g,{children:[r.jsx(S,{name:"isEnabled",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx(y,{children:r.jsx(m,{type:"submit",children:"Submit"})})]})})}},t={},i={render:()=>{const o=l();return r.jsxs(d,{form:o,onSubmit:async()=>await f(2e3),children:[r.jsx(u,{name:"email",children:r.jsx(x,{children:r.jsx(h,{children:"Text"})})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(m,{onPress:()=>o.setError("email",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(m,{onPress:()=>o.setFocus("email"),children:"focus through form"}),r.jsx(m,{type:"submit",children:"Submit"})]})}};var e,s,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:"{}",...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var p,a,c;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"email"}>
          <Switch>
            <Label>Text</Label>
          </Switch>
        </Field>
        <div style={{
        marginBottom: "2200px"
      }} />
        <Button onPress={() => form.setError("email", {
        type: "required",
        message: "oh no"
      }, {
        shouldFocus: true
      })}>
          err through form
        </Button>
        <Button onPress={() => form.setFocus("email")}>
          focus through form
        </Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(c=(a=i.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const Lr=["Default","WithFocusAndError"];export{t as Default,i as WithFocusAndError,Lr as __namedExportsOrder,Ar as default};
