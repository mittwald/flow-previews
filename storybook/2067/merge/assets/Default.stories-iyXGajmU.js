import{j as r}from"./iframe-woTOwd7_.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-DjIAWUJ_.js";import{L as m}from"./Link-BMoBUUDj.js";import{H as s}from"./HeaderNavigation-Cgnc4dsa.js";import{B as o}from"./Button-CqXZY3YI.js";import{T as p}from"./Text-BJYnGCYe.js";import{I as B}from"./Image-DoJCRft2.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Bp2I225-.js";import{C as y,M as c}from"./MenuItem-BvXVQ7PO.js";import{C as A}from"./ContextMenuTrigger-Cbg9OcSM.js";import"./ContextMenuSection-C3ToUB4_.js";import{a as D,M as E}from"./Modal-JsSF0eJZ.js";import{H as G}from"./Heading-C0FiA7i7.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./index-C7RKIbtQ.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./context-FI-dTyul.js";import"./utils-D3yPsyL0.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-DGvsG6co.js";import"./useFocus-BFXKtnCR.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./dynamic-C-nO0pE1.js";import"./LoadingSpinner-CNqJtC-J.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BJ7HgVKa.js";import"./ProgressBar-utMpytcX.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B4P6bty3.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./Text-CI6uvf20.js";import"./AlertIcon-RSMDYTPb.js";import"./Action-BlHQAv7W.js";import"./context-BxwyR-58.js";import"./useStatic-DuP9qB1q.js";import"./getActionGroupSlot-Bh4vYXcV.js";import"./Popover-2tuG5vCS.js";import"./useOverlayController-OwJfwlq3.js";import"./OverlayContextProvider-CObjqvVa.js";import"./Dialog-BSqtdg0s.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./VisuallyHidden-C2zuidlV.js";import"./ClearPropsContextView-CjyS1sud.js";import"./Switch-BulIhML9.js";import"./useMakeFocusable-CoPGrv-w.js";import"./useToggleState-CizgdS5n.js";import"./useFormReset-DJCienz-.js";import"./OverlayTrigger-CRF0Gc7N.js";import"./ControlledNotification-LitDRyiB.js";import"./DialogTriggerView-C0oKAAZW.js";import"./Overlay-Cvi4qWvU.js";import"./ButtonView-BPVhA89-.js";import"./Heading-BBFlLFGc.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
