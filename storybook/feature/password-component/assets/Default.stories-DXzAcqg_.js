import{A as t}from"./ActionGroup-7_5BF19f.js";import{R as r}from"./index-BwDkhjyp.js";import{B as o}from"./Button-35pCrNCZ.js";import{A as i,s as O}from"./Action-Dz1KgLbV.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./flowComponent-AS0Hu7py.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./IconApp-Rpgm6RsJ.js";import"./IconWarning-B2iaes-f.js";import"./Wrap-DQq6jo70.js";import"./Text-DSN33OXK.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-BuIyiEeX.js";import"./utils-B-mS0hjG.js";import"./LoadingSpinner-Dmul2awi.js";import"./useLocalizedStringFormatter-CbSA8sNn.js";import"./Button-C6BAnfYv.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-CtcwBWSa.js";import"./usePress-C1ab-RBW.js";import"./context-DoCmQP3a.js";import"./useSelector-BZxe7lyr.js";const er={title:"Actions/ActionGroup",component:t,render:e=>r.createElement(t,{...e},r.createElement(i,{action:()=>O(1500)},r.createElement(o,{color:"accent"},"Create customer")),r.createElement(i,null,r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort")))},a={},n={render:e=>r.createElement(t,{...e},r.createElement(o,{color:"danger"},"Delete project"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},s={render:e=>r.createElement(t,{...e},r.createElement(o,null,"Ok"))},c={render:e=>r.createElement(t,{...e},r.createElement(o,{slot:"primary",color:"accent"},"Add email address"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save and add more"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},m={render:e=>r.createElement(t,{...e},r.createElement(o,{slot:"primary",color:"accent"},"Add email address"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save and add more"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save as new"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},p={parameters:{viewport:{defaultViewport:"mobile1"}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var A,y,f;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button color="danger">Delete project</Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(f=(y=n.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var B,E,v;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...(v=(E=s.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var b,S,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(g=(S=c.parameters)==null?void 0:S.docs)==null?void 0:g.source}}};var G,w,D;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save as new
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(D=(w=m.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var h,x,W;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(W=(x=p.parameters)==null?void 0:x.docs)==null?void 0:W.source}}};const tr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile"];export{n as Danger,a as Default,s as Info,p as Mobile,m as WithExtraSecondaryAction,c as WithSecondaryAction,tr as __namedExportsOrder,er as default};
