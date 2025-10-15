import{j as r}from"./iframe-CqjcYzEy.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-D54OF1fr.js";import{L as m}from"./Link-BlKfuc72.js";import{H as s}from"./HeaderNavigation-Br5UWoiP.js";import{B as o}from"./Button-_n3f2tJI.js";import{T as p}from"./Text-C88kvj5Y.js";import{I as B}from"./Image-BqBqe6mr.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-CQwVMmqe.js";import{C as y,M as c}from"./MenuItem-BJntgY1s.js";import{C as A}from"./ContextMenuTrigger-BbWO92DA.js";import"./ContextMenuSection-CogvxgrL.js";import{a as D,M as E}from"./Modal-9q_CCo0c.js";import{H as G}from"./Heading-Da22rpb0.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./index-0TrhkGFb.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./context-CVWMzqu0.js";import"./utils-CEH4bJOc.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./dynamic-B6VmRDv6.js";import"./LoadingSpinner-BJn8yItu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BkLoBLwO.js";import"./ProgressBar-CdOohM5f.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BlhuXvad.js";import"./EmulatedBoldText-CpIdef6b.js";import"./Text-DBGfsT13.js";import"./AlertIcon-BFRi1XBM.js";import"./Action-BV8ECr9I.js";import"./context-BZQvEHSq.js";import"./useStatic-B0fjiaVy.js";import"./getActionGroupSlot-DrC7gLzC.js";import"./Popover-C0Icy7BB.js";import"./useOverlayController-CtOPQD7l.js";import"./OverlayContextProvider-BmYGwoWC.js";import"./Dialog-S-MpwxP2.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./VisuallyHidden-l-GsqitC.js";import"./ClearPropsContextView-BEsUC-dX.js";import"./Switch-BIxfH9E4.js";import"./useMakeFocusable-Bo04lqU0.js";import"./useToggleState-CKfljIsx.js";import"./useFormReset-BSVvJl_b.js";import"./OverlayTrigger-ckZkQZqX.js";import"./ControlledNotification-BgE0fw7j.js";import"./DialogTriggerView-G5ODpB3E.js";import"./Overlay-DJe2oPMX.js";import"./ButtonView-CfQQuZ6d.js";import"./Heading-B1wP9ocY.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
