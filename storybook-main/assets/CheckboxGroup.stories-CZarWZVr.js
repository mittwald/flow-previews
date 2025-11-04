import{j as r,r as j}from"./iframe-B_2yjHsp.js";import{a as u,u as h,F as d,t as v}from"./Form-CVbH8ORe.js";import{L as i}from"./Label-CvwiNv20.js";import{B as c}from"./Button-Da-1LcXr.js";import{S as f}from"./Section-CUx_sSpw.js";import{A as O}from"./ActionGroup-DmSuXNY0.js";import{s as x}from"./Action-CxJM8pyz.js";import{q as n,n as e,p as b,F as k}from"./Modal-PQJN2LPe.js";import"./index-nuYtCEEu.js";import"./dynamic-BwNG8YI_.js";import"./flowComponent-BV7e4GQN.js";import"./index-CkiHuacM.js";import"./clsx-B-dksMZM.js";import"./index-D1oAZySF.js";import"./useLocalizedStringFormatter-tPwVT4HJ.js";import"./context-B3k2yYk7.js";import"./browser-CwXIoFOI.js";import"./utils-2cwPFhAn.js";import"./ProgressBar-D7qqep5T.js";import"./Hidden-CeFRPKf9.js";import"./filterDOMProps-i7L6S0l1.js";import"./IconWarning-CUKg7OTE.js";import"./Text-hvZATcoQ.js";import"./EmulatedBoldText-DedaqQcc.js";import"./LoadingSpinner-BGKVD4AF.js";import"./Button-NNWtmROB.js";import"./useFocusRing-ofK0sPix.js";import"./useFocusable-BOYBZXPk.js";import"./Dialog-0Z2XDu66.js";import"./RSPContexts-v1WzALnr.js";import"./OverlayArrow-P73E_zIs.js";import"./useControlledState-BCeVh08t.js";import"./Collection-Caw85O5m.js";import"./CollectionBuilder-CokeJ_11.js";import"./SelectionIndicator-Cf6NqUf0.js";import"./Separator-mHpTHZcJ.js";import"./getActionGroupSlot-BtC-t14k.js";import"./useStatic-BbFRD4mD.js";import"./context-RnBPL4A_.js";import"./Popover-S8IKDEQt.js";import"./OverlayTrigger-CLiMft97.js";import"./ControlledNotification-CcfPwfqM.js";import"./ClearPropsContextView-CmdRpvoP.js";import"./LayoutCard-BhX-o2o9.js";import"./Accordion-Dh1vAckq.js";import"./Alert-Ci2W8wzE.js";import"./AlertIcon-D8ErrYA_.js";import"./AlertBadge-N78J4b3B.js";import"./Align-D8GL4uT8.js";import"./TableFooterRow-BX4y_-af.js";import"./SkeletonText-C111BfZ6.js";import"./Avatar-rm9C52PR.js";import"./AvatarStack-CMXj5j1F.js";import"./Badge-BoOjuLxe.js";import"./BigNumber-DZOd7298.js";import"./Breadcrumb-Zcl647A0.js";import"./Link-CXGFKqOI.js";import"./Heading-DVX5TZYJ.js";import"./Legend-Xzl12hUm.js";import"./FileCardList-B0GAw7fP.js";import"./Image-CdGmt07t.js";import"./CodeBlock-CLeVAoiM.js";import"./CopyButton-CjZdUu_l.js";import"./Tooltip-MdQJtocT.js";import"./react-children-utilities-y5VJ4LYu.js";import"./Color-DKHA1RwH.js";import"./Content-CvxJ_sop.js";import"./ContextualHelpTrigger-BX1zaVS3.js";import"./CounterBadge-DEwK3SRS.js";import"./DonutChart-VHCCHD-7.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DoAI9HVS.js";import"./Header-BtyhIfrZ.js";import"./Initials-DtsdFviO.js";import"./InlineCode-1yfwAzwK.js";import"./LabeledValue-BQPVMimT.js";import"./PopoverTrigger-BYXXEk4H.js";import"./Markdown-fZ2Vfvpn.js";import"./Separator-D_ZzE7Mo.js";import"./Message-CWNMVrmW.js";import"./MessageSeparator-aQB3jYnu.js";import"./NavigationGroup-fMKk2wCS.js";import"./Notification-BrNaNkR3.js";import"./NotificationProvider-C2XVLjMN.js";import"./ProgressBar-CgPuZ0L-.js";import"./Rating-Nm9nVIK-.js";import"./Skeleton-C0TITtpv.js";const{action:C}=__STORYBOOK_MODULE_ACTIONS__,F=C("submit"),te={title:"Integrations/React Hook Form/CheckboxGroup",component:u,render:()=>{const s=async t=>{await x(1500),F(t)},o=h({defaultValues:{interests:[],interestsDefaultValue:["foo"],interestsRequired:[],interestsMaxValue:[]}}),m=v();return r.jsx(d,{form:o,onSubmit:s,children:r.jsxs(f,{children:[r.jsx(m,{name:"interests",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsDefaultValue",children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"})]})}),r.jsx(m,{name:"interestsRequired",rules:{validate:{min:t=>Array.isArray(t)&&t.length>0?!0:"Check at least 1 item"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check at least 1 item"})]})}),r.jsx(m,{name:"interestsMaxValue",rules:{validate:{max:t=>Array.isArray(t)&&t.length<3?!0:"Check max 2 items"}},children:r.jsxs(n,{children:[r.jsx(i,{children:"Interests"}),r.jsx(e,{value:"foo",children:"Foo"}),r.jsx(e,{value:"bar",children:"Bar"}),r.jsx(e,{value:"baz",children:"Baz"}),r.jsx(b,{children:"Check max 2 items"})]})}),r.jsx(O,{children:r.jsx(c,{type:"submit",children:"Submit"})})]})})}},a={},l={render:s=>{const o=h();return j.useEffect(()=>{o.setError("field",{type:"required",message:"ErrorFromForm"})},[]),r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsxs(n,{l:[1,1,1],m:[1,1],isInvalid:!0,...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"}),r.jsx(k,{children:"ErrorFromOuterFieldError!"})]})]})}},p={render:s=>{const o=h();return r.jsxs(d,{form:o,onSubmit:async()=>await x(2e3),children:[r.jsx(u,{name:"field",children:r.jsxs(n,{l:[1,1,1],m:[1,1],...s,children:[r.jsx(i,{children:"Options"}),r.jsx(e,{value:"1",children:"Option 1"}),r.jsx(e,{value:"2",children:"Option 2"}),r.jsx(e,{value:"3",children:"Option 3"}),r.jsx(e,{value:"4",children:"Option 4"}),r.jsx(e,{value:"5",children:"Option 5"}),r.jsx(e,{value:"6",children:"Option 6"})]})}),r.jsx("div",{style:{marginBottom:"2200px"}}),r.jsx(c,{onPress:()=>o.setError("field",{type:"required",message:"oh no"},{shouldFocus:!0}),children:"err through form"}),r.jsx(c,{onPress:()=>o.setFocus("field"),children:"focus through form"}),r.jsx(c,{type:"submit",children:"Submit"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:"{}",...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    useEffect(() => {
      form.setError("field", {
        type: "required",
        message: "ErrorFromForm"
      });
    }, []);
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
        </Field>
        <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} isInvalid {...props}>
          <Label>Options</Label>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
          <Checkbox value="3">Option 3</Checkbox>
          <Checkbox value="4">Option 4</Checkbox>
          <Checkbox value="5">Option 5</Checkbox>
          <Checkbox value="6">Option 6</Checkbox>
          <FieldError>ErrorFromOuterFieldError!</FieldError>
        </CheckboxGroup>
      </Form>;
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => {
    const form = useForm();
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field name={"field"}>
          <CheckboxGroup l={[1, 1, 1]} m={[1, 1]} {...props}>
            <Label>Options</Label>
            <Checkbox value="1">Option 1</Checkbox>
            <Checkbox value="2">Option 2</Checkbox>
            <Checkbox value="3">Option 3</Checkbox>
            <Checkbox value="4">Option 4</Checkbox>
            <Checkbox value="5">Option 5</Checkbox>
            <Checkbox value="6">Option 6</Checkbox>
          </CheckboxGroup>
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
}`,...p.parameters?.docs?.source}}};const ie=["Default","WithFieldError","WithFocus"];export{a as Default,l as WithFieldError,p as WithFocus,ie as __namedExportsOrder,te as default};
