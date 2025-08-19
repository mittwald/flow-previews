import{j as r}from"./iframe-dcfCh18n.js";import{u as H,$ as S,X as b,E as v,a0 as B}from"./IconWarning-BWA_nqvd.js";import{L as m}from"./Link-CVTly0St.js";import{H as s}from"./HeaderNavigation-Bt-mgixV.js";import{B as o}from"./Button-Da273mbx.js";import{T as p}from"./Text-D7p3kvP7.js";import{I as C}from"./Image-Dw-CU6eP.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-SY4IUe2y.js";import{a as y,C as A,M as c}from"./ContextMenuContent-COHNOv-k.js";import"./ContextMenuSection-BRh-I5dJ.js";import{a as D,M as E}from"./Modal-CdmK1LcZ.js";import{H as G}from"./Heading-D8gQrocA.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGfHC8WN.js";import"./mergeRefs-BuFcdMNh.js";import"./index-Dqpikgfu.js";import"./useLocalizedStringFormatter-CVOqiPV9.js";import"./context-BfLqp0TH.js";import"./utils-CaaN6tMi.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-BgO5jEhv.js";import"./useFocus-DiEh5oG5.js";import"./useFocusRing-kHWWBcyh.js";import"./useFocusable-Cdnk8Kqp.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-Bo6_-KdV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-D8qJizcb.js";import"./ProgressBar-BcZD8tRU.js";import"./Label-DBNmmXrt.js";import"./Hidden-CnGKQwOV.js";import"./useLabel-CpnVZyQW.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-D8aXoHXc.js";import"./EmulatedBoldText-De2JmDGd.js";import"./Text-38QS6QcB.js";import"./AlertIcon-BH4Y-svb.js";import"./Action-4w-CWFpf.js";import"./context-TKpdQxdP.js";import"./useStatic-Dqwqzi-C.js";import"./getActionGroupSlot-DfUfHthN.js";import"./Popover-DYqV-DcI.js";import"./DialogTriggerView-BB_RmeFU.js";import"./Dialog-DLMrif4z.js";import"./RSPContexts-W4MNUJhM.js";import"./OverlayArrow-NUC550dY.js";import"./useControlledState-CjmCqi1H.js";import"./Collection-DEoan4F0.js";import"./CollectionBuilder-WRzFhLbw.js";import"./Separator-DQZuDVMG.js";import"./Group-qqCya-sH.js";import"./SearchField-DOB9WtIS.js";import"./FieldError-jHHw5TXz.js";import"./Form-k5YG3sGC.js";import"./useTextField-BUPKcxtd.js";import"./useFormReset-DV-dKI4G.js";import"./TextField-DqWSAtzr.js";import"./useEvent-9GQqu5so.js";import"./SelectionManager-BtQR7swA.js";import"./useCollator-DK-_TAlj.js";import"./FocusScope-BOAHQoFR.js";import"./VisuallyHidden-7QHbeduJ.js";import"./Switch-DNVkne84.js";import"./Label-CuZ7LHL3.js";import"./useToggleState-DAOU4t5D.js";import"./Overlay-LumP7zlI.js";import"./ButtonView-C-WQbeT5.js";import"./Heading-DaCQBB00.js";const Vr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Yr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Yr as __namedExportsOrder,Vr as default};
