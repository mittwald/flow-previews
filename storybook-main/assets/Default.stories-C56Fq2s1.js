import{j as r}from"./iframe-Cxe2R7_6.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Jidhe8u4.js";import{L as m}from"./Link-B5-ksQ_w.js";import{H as s}from"./HeaderNavigation-C6Zq8jPQ.js";import{B as o}from"./Button-DDreAfBq.js";import{T as p}from"./Text-BRz7lILS.js";import{I as B}from"./Image-Be3kX8EG.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-B8QMHTj6.js";import{C as y,M as c}from"./MenuItem-BARhGzfy.js";import{C as A}from"./ContextMenuTrigger-D_oLkEQG.js";import"./ContextMenuSection-Bi1QxvNY.js";import{a as D,M as E}from"./Modal-faWwHJnR.js";import{H as G}from"./Heading-BGX___zH.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-atuhteL1.js";import"./index-BmulK9zF.js";import"./index-C9WdiMZF.js";import"./useLocalizedStringFormatter-Iif1rEXq.js";import"./context-C4neI5Xk.js";import"./utils-DyWdIPZh.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-CePQ8dAH.js";import"./useFocus-Cpp7XZsJ.js";import"./useFocusRing-b-PxAWXn.js";import"./useFocusable-D66X7lwl.js";import"./dynamic-C5ZbgSqQ.js";import"./LoadingSpinner-e3lyxMd6.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CDVXHq5z.js";import"./ProgressBar-CNBuCKLn.js";import"./Label-bC6dqEsb.js";import"./Hidden-D2ApJihV.js";import"./useLabel-D72_X68t.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-eQsbTmR1.js";import"./EmulatedBoldText-C6_bi1Ug.js";import"./Text-DwJdwITw.js";import"./AlertIcon-VhJiS59g.js";import"./Action-g8e46b99.js";import"./context-DVixImBB.js";import"./useStatic-CcLu1Qpn.js";import"./getActionGroupSlot-BsGN6_f1.js";import"./Popover-CD2R0w6L.js";import"./useOverlayController-YObJaJsP.js";import"./OverlayContextProvider-CjeK4qkK.js";import"./Dialog-Ch6Gf7aG.js";import"./RSPContexts-BTHaIq-S.js";import"./OverlayArrow-BxgQp36F.js";import"./useControlledState-B5CLhXq4.js";import"./Collection-C-iX88s0.js";import"./CollectionBuilder-DY4KGZ6m.js";import"./SelectionIndicator-BZBAluCS.js";import"./Separator-TUkk8FpW.js";import"./SelectionManager-D-Y_L5dA.js";import"./useEvent-C1DB-zaK.js";import"./useCollator-B3EheL1U.js";import"./FocusScope-NPqoHgmt.js";import"./VisuallyHidden-BVfZKHZh.js";import"./ClearPropsContextView-qCrklifR.js";import"./Switch-CBFG4z5T.js";import"./useMakeFocusable-DEGrXNpK.js";import"./useToggleState-HfrfzXRJ.js";import"./useFormReset-ClXq3Rv0.js";import"./OverlayTrigger-Bx33MvQ_.js";import"./ControlledNotification-D-qrUf5D.js";import"./DialogTriggerView-vybZbbW0.js";import"./Overlay-4QPQV_lb.js";import"./ButtonView-tBAVQtnE.js";import"./Heading-Cg-1JubH.js";const $r={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ro=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,ro as __namedExportsOrder,$r as default};
